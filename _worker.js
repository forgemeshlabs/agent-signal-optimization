const MARKDOWN_ROUTES = new Map([
  ["/", "/index.md"],
  ["/index.html", "/index.md"],
  ["/examples", "/examples.md"],
  ["/examples.html", "/examples.md"]
]);

function estimateTokens(markdown) {
  return Math.max(1, Math.ceil(markdown.trim().split(/\s+/).length * 1.35));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = request.headers.get("accept") || "";
    const markdownPath = MARKDOWN_ROUTES.get(url.pathname);

    if (markdownPath && accept.toLowerCase().includes("text/markdown")) {
      const markdownUrl = new URL(markdownPath, url.origin);
      const markdownRequest = new Request(markdownUrl, request);
      const assetResponse = await env.ASSETS.fetch(markdownRequest);
      const markdown = await assetResponse.text();
      const headers = new Headers(assetResponse.headers);

      headers.set("content-type", "text/markdown; charset=utf-8");
      headers.set("vary", "Accept");
      headers.set("x-markdown-tokens", String(estimateTokens(markdown)));
      headers.set("content-signal", "ai-train=yes, search=yes, ai-input=yes");

      return new Response(markdown, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers
      });
    }

    const response = await env.ASSETS.fetch(request);
    // Machine-readable paths must 404 as JSON, never fall back to the HTML shell
    // (scanners read a 200 HTML body at /.well-known/* as a broken manifest).
    const ct = response.headers.get("content-type") || "";
    const machinePath = url.pathname.startsWith("/.well-known/") || url.pathname.startsWith("/api/") || /\.(json|txt|xml|md)$/.test(url.pathname);
    if (machinePath && ct.includes("text/html")) {
      return new Response(JSON.stringify({ error: "not_found", path: url.pathname }), {
        status: 404,
        headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
      });
    }
    const headers = new Headers(response.headers);
    headers.append("vary", "Accept");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
