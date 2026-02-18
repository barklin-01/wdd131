document.addEventListener("DOMContentLoaded", () => {
    // Fecha de modificación
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    const lastModifiedElem = document.getElementById("lastModified");
    if (lastModifiedElem) {
        lastModifiedElem.textContent = `Last Modification: ${document.lastModified}`;
    }

    // Botón de hamburguesa
    const menuButton = document.getElementById("menu-button");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("nav-open");
        });
    }
});
