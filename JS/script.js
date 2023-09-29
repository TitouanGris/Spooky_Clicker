
//Compteur de clics
let nombreClics = 0;

function comptage() {
    nombreClics++;
    document.getElementById("nombreClics").textContent = nombreClics;
}

document.getElementById("boutonClic").addEventListener("click", comptage);



//Script MODALES
function modaleopen() {
    const el = document.getElementById("rules");
    el.style.display = "initial";
}

function modaleclose() {
    const el = document.getElementById("rules");
    el.style.display = "none";
}

function modaleopen2() {
    const el = document.getElementById("contact");
    el.style.display = "initial";
}

function modaleclose2() {
    const el = document.getElementById("contact");
    el.style.display = "none";
}









