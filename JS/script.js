let nombreClics = 0;

function comptage() {
    nombreClics++;
    document.getElementById("nombreClics").textContent = nombreClics;
}

document.getElementById("boutonClic").addEventListener("click", comptage);