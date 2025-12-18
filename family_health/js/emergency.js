import { getStore, saveStore } from "./store.js";

const list = document.getElementById("emergencyContacts");
const responseBox = document.getElementById("emergencyResponse");

const nameInput = document.getElementById("contactName");
const phoneInput = document.getElementById("contactPhone");
const addBtn = document.getElementById("addContactBtn");

/* ---------- Render Contacts ---------- */
function renderContacts() {
  const store = getStore();
  store.emergencyContacts = store.emergencyContacts || [];

  list.innerHTML = "";

  store.emergencyContacts.forEach((c, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${c.name} : ${c.phone}</span>
      <div>
        <button class="call-btn">Call</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    li.querySelector(".call-btn").onclick = () => callNumber(c.phone);
    li.querySelector(".delete-btn").onclick = () => deleteContact(index);

    list.appendChild(li);
  });
}

/* ---------- Add Contact ---------- */
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !phone) {
    alert("Please enter both name and phone number.");
    return;
  }

  const store = getStore();
  store.emergencyContacts = store.emergencyContacts || [];
  store.emergencyContacts.push({ name, phone });

  saveStore(store);
  nameInput.value = "";
  phoneInput.value = "";
  renderContacts();
});

/* ---------- Delete Contact ---------- */
function deleteContact(index) {
  const store = getStore();
  store.emergencyContacts.splice(index, 1);
  saveStore(store);
  renderContacts();
}

/* ---------- Call Simulation ---------- */
function callNumber(phone) {
  responseBox.textContent = `📞 Calling ${phone}...`;
  alert(`Simulated call to ${phone}`);
}

/* ---------- Emergency Buttons ---------- */
document.getElementById("callEmergencyBtn").addEventListener("click", () => {
  const store = getStore();
  if (!store.emergencyContacts || store.emergencyContacts.length === 0) {
    alert("No emergency contacts added.");
    return;
  }
  callNumber(store.emergencyContacts[0].phone);
});

document.getElementById("sendHelpBtn").addEventListener("click", () => {
  responseBox.textContent = "📩 Help message sent to emergency contacts.";
});

/* ---------- Init ---------- */
renderContacts();
