const MARKDOWN_ROUTES = new Map([
  ["/", "/index.md"],
  ["/index.html", "/index.md"]
]);

function estimateTokens(markdown) {
  return Math.max(1, Math.ceil(markdown.trim().split(/\s+/).length * 1.35));
}

export async function onRequest(context) {
  const { request, env } = context;
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
  const headers = new Headers(response.headers);
  headers.append("vary", "Accept");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
