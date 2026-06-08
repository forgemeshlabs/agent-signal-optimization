const checklist = document.querySelector("#asoChecklist");
const scoreValue = document.querySelector("#scoreValue");
const scoreLevel = document.querySelector("#scoreLevel");
const scoreAdvice = document.querySelector("#scoreAdvice");

const levels = [
  { min: 90, label: "ASO-5 Autonomous-Commerce-Ready", advice: "Your signal stack is strong. Focus on proof, monitoring, and certification." },
  { min: 70, label: "ASO-4 Trustable", advice: "Agents can likely verify you. Commerce and memory signals are the next leverage points." },
  { min: 50, label: "ASO-3 Invocable", advice: "Agents can probably call you. Strengthen trust, reputation, and payment paths." },
  { min: 30, label: "ASO-2 Understandable", advice: "Agents can understand your service. Add invocation and trust signals next." },
  { min: 10, label: "ASO-1 Discoverable", advice: "Agents can begin finding you. Identity files and structured docs should come next." },
  { min: 0, label: "ASO-0 Invisible", advice: "No agent signals selected yet." }
];

function updateScore() {
  const score = [...checklist.querySelectorAll("input:checked")].reduce((total, input) => {
    return total + Number(input.dataset.points || 0);
  }, 0);
  const level = levels.find((item) => score >= item.min);

  scoreValue.textContent = String(score);
  scoreLevel.textContent = level.label;
  scoreAdvice.textContent = level.advice;
}

if (checklist) {
  checklist.addEventListener("change", updateScore);
  updateScore();
}
