import { getStore } from "./store.js";

document.addEventListener("DOMContentLoaded", () => {
  const store = getStore();

  /* ---------- EMERGENCY CONTACT COUNT ---------- */
  const emergencyCountEl = document.getElementById("emergencyCount");
  if (emergencyCountEl) {
    emergencyCountEl.textContent = (store.emergencyContacts || []).length;
  }

  /* ---------- FAMILY MEMBER COUNT ---------- */
  const memberCountEl = document.getElementById("memberCount");
  if (memberCountEl) {
    memberCountEl.textContent = (store.members || []).length;
  }

  const medCountEl = document.getElementById("medicationCount");
  if (medCountEl) {
    medCountEl.textContent = (store.medications || []).length;
  }

  /* ---------- HEALTH SCORE ---------- */
  const score = 82;
  const scoreEl = document.querySelector(".score");
  const statusEl = document.querySelector(".status");

  if (scoreEl && statusEl) {
    scoreEl.textContent = `${score}%`;

    if (score >= 80) {
      statusEl.textContent = "Good";
      statusEl.className = "status good";
    } else if (score >= 50) {
      statusEl.textContent = "Average";
      statusEl.className = "status average";
    } else {
      statusEl.textContent = "Critical";
      statusEl.className = "status critical";
    }
  }

  /* ---------- AI INSIGHTS ---------- */
  const insights = document.querySelector(".ai-insights ul");
  if (insights) {
    insights.innerHTML = `
      <li>Family health stable this week</li>
      <li class="alert">1 medication missed yesterday</li>
    `;
  }
});
