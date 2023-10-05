
//Compteur de clics
let nombreClics = 0;
let pumpkinPerClicks = 1;

function comptage() {
    nombreClics += pumpkinPerClicks;
    document.getElementById("nombreClics").textContent = nombreClics.toFixed(1);
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
function noRefresh(e) {
    e.preventDefault()

    alert("Thank you for you're message !, Spooky clicker team")
    modaleclose2()
}