const btn = document.getElementById('dropbtn');
const dropdown = document.getElementById('dropdown');

btn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

dropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        dropdown.classList.remove("show");
    });
});