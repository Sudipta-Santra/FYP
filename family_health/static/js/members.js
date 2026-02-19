const form = document.getElementById("addMemberForm");
const tableBody = document.querySelector("#membersTable tbody");

let members = [];
let editIndex = null;

if (form && tableBody) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const member = {
      name: name.value,
      age: age.value,
      gender: gender.value,
      blood: blood.value,
      permissions: permissions.value,
    };

    if (editIndex === null) {
      members.push(member);
    } else {
      members[editIndex] = member;
      editIndex = null;
    }

    form.reset();
    renderMembers();
  });
}

function renderMembers() {
  tableBody.innerHTML = "";

  members.forEach((m, i) => {
    tableBody.innerHTML += `
      <tr>
        <td>${m.name}</td>
        <td>${m.age}</td>
        <td>${m.gender}</td>
        <td>${m.blood}</td>
        <td>${m.permissions}</td>
        <td>
          <button onclick="editMember(${i})">Edit</button>
          <button onclick="deleteMember(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

window.editMember = (i) => {
  const m = members[i];
  name.value = m.name;
  age.value = m.age;
  gender.value = m.gender;
  blood.value = m.blood;
  permissions.value = m.permissions;
  editIndex = i;
};

window.deleteMember = (i) => {
  if (confirm("Delete this member?")) {
    members.splice(i, 1);
    renderMembers();
  }
};
