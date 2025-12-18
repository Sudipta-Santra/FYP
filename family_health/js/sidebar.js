const links = document.querySelectorAll(".sidebar-nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.getElementById("sidebarToggle");

if (sidebar && toggleBtn) {
  // Restore last state
  if (localStorage.getItem("sidebarCollapsed") === "true") {
    sidebar.classList.add("collapsed");
  }

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    localStorage.setItem(
      "sidebarCollapsed",
      sidebar.classList.contains("collapsed")
    );
  });
}
