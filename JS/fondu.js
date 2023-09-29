//script transition page INDEX2 vers INDEX//
const transition = document.querySelector(".transition")
setTimeout(function () {
    transition.classList.remove("active")
}, 0)
const liens = document.querySelectorAll('nav a')

for (i = 0; i < liens.length; i++) {
    let lien = liens[i]
    lien.addEventListener('click', function (event) {
        event.preventDefault();
        transition.classList.add('active')
    })
}

lienclic = Event.target.href

setTimeout(function () {
    window.location.href = lienclic
}, 800)