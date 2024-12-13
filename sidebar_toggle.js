function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    
sidebar.classList.toggle("open");
const isOpen = sidebar.classList.contains("open");
sidebar.setAttribute("aria-hidden", !isOpen);
const toggleIcon = document.querySelector(".toggle-icon");
toggleIcon.setAttribute("aria-pressed", isOpen);

}

// Close the sidebar only when clicking the close button inside it
document.querySelector(".close-btn").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open");
});
