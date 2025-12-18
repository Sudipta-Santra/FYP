const aiInput = document.getElementById("aiInput");
const aiResponse = document.getElementById("aiResponse");
const askBtn = document.getElementById("askBtn");
const summary = document.getElementById("healthSummary");
const alerts = document.getElementById("predictiveAlerts");

// Mock AI responses
const responses = {
  "who missed medicine today":
    "AI Insight: John missed his morning medication today. Consider enabling reminder alerts.",
  "show bp trend of mom":
    "AI Insight: Mom’s blood pressure has remained stable around 120/80 over the last 7 days.",
  "is anyone at health risk this week":
    "AI Insight: No high-risk patterns detected this week. Risk level is LOW.",
};

askBtn.addEventListener("click", () => {
  const query = aiInput.value.toLowerCase().trim();
  aiResponse.innerHTML = "<em>Analyzing family health data...</em>";

  setTimeout(() => {
    aiResponse.textContent =
      responses[query] ||
      "AI Insight: No specific insight found. Please consult a healthcare professional.";

    // Update summary & alerts
    summary.textContent =
      "Weekly Summary: Family vitals are stable with good medication adherence.";

    alerts.innerHTML = `
      <li class="low">Low Risk: Overall family health is stable</li>
      <li class="medium">Medium Risk: One missed medication detected</li>
    `;
  }, 900);

  aiInput.value = "";
});

// Click example → auto-fill
document.querySelectorAll(".example-list li").forEach((item) => {
  item.addEventListener("click", () => {
    aiInput.value = item.textContent;
    aiInput.focus();
  });
});
