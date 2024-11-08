function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
}

// Close the sidebar only when clicking the close button inside it
document.querySelector(".close-btn").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("open");
});
