import { getStore, saveStore } from "./store.js";

const form = document.getElementById("addMemberForm");
const list = document.getElementById("memberList");
const emptyState = document.getElementById("emptyState");
const countBadge = document.getElementById("memberCountBadge");

/* ---------- Render Members ---------- */
function renderMembers() {
  const store = getStore();
  list.innerHTML = "";

  if (!store.members || store.members.length === 0) {
    emptyState.style.display = "block";
    updateCount();
    return;
  }

  emptyState.style.display = "none";

  store.members.forEach((member, index) => {
    const li = document.createElement("li");
    li.className = "member-item";

    li.innerHTML = `
      <div class="member-info">
        <strong>${member.name}</strong>
        <span>Age: ${member.age} • Blood: ${member.blood}</span>
      </div>

      <div class="member-actions">
        <button data-index="${index}">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });

  updateCount();
}

/* ---------- Add Member ---------- */
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const age = form.age.value.trim();
  const gender = form.gender.value;
  const blood = form.blood.value.trim();
  const permissions = form.permissions.value;

  if (!name || !age || !gender || !blood) {
    alert("Please fill all required fields.");
    return;
  }

  const store = getStore();

  store.members.push({
    name,
    age,
    gender,
    blood,
    permissions,
  });

  saveStore(store);
  form.reset();
  renderMembers();
});

/* ---------- Delete Member ---------- */
list?.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const index = Number(e.target.dataset.index);
  const store = getStore();

  if (confirm("Remove this family member?")) {
    store.members.splice(index, 1);
    saveStore(store);
    renderMembers();
  }
});

/* ---------- Update Count ---------- */
function updateCount() {
  const store = getStore();
  if (countBadge) {
    countBadge.textContent = store.members.length;
  }
}

/* ---------- Init ---------- */
renderMembers();
