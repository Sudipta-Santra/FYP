import { getStore, saveStore } from "./store.js";

const form = document.getElementById("medForm");
const list = document.getElementById("medList");
const empty = document.getElementById("emptyMed");

/* ---------- Render ---------- */
function renderMeds() {
  const store = getStore();
  list.innerHTML = "";

  if (!store.medications || store.medications.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  store.medications.forEach((med, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${med.name}</strong>
      <span>${med.time}</span>
      <button data-index="${index}">Delete</button>
    `;
    list.appendChild(li);
  });
}

/* ---------- Add Reminder ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const time = form.time.value;

  if (!name || !time) {
    alert("Please enter medicine name and time.");
    return;
  }

  const store = getStore();
  store.medications = store.medications || [];

  store.medications.push({
    name,
    time,
    triggered: false,
  });

  saveStore(store);
  form.reset();
  renderMeds();

  alert(`✅ Reminder set for "${name}" at ${time}`);
});

/* ---------- Delete ---------- */
list.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const store = getStore();
  store.medications.splice(e.target.dataset.index, 1);
  saveStore(store);
  renderMeds();
});

/* ---------- TIME-BASED ALERT CHECK ---------- */
setInterval(() => {
  const store = getStore();
  if (!store.medications) return;

  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5); // HH:MM

  let updated = false;

  store.medications.forEach((med) => {
    if (med.time === currentTime && !med.triggered) {
      alert(`⏰ Time to take: ${med.name}`);
      med.triggered = true;
      updated = true;
    }
  });

  if (updated) saveStore(store);
}, 30000); // checks every 30 seconds

/* ---------- Init ---------- */
renderMeds();
