//Fecha de Modificacion
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
//boton de hamburgesa//
const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});
