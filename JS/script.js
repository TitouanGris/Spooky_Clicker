function modaleopen() {
    const el = document.getElementById("rules");
    el.style.display =  "initial";
  }

  function modaleclose() {
    const el = document.getElementById("rules");
    el.style.display =  "none" ;
  }

  function modaleopen2() {
    const el = document.getElementById("contact");
    el.style.display =  "initial" ;
  }

  function modaleclose2() {
    const el = document.getElementById("contact");
    el.style.display =  "none";
  }

  //script transition//
  const transition = document.querySelector(".transition")
setTimeout(function(){
    transition.classList.remove("active")
}, 0)

// on sélectionne les liens de pages qui joueront l'animation
const liens = document.querySelectorAll('nav a')

for(i=0; i< liens.length; i++){
    let lien = liens[i]

    // on écoute le clic sur ces liens
    lien.addEventListener('click' , function(event){

        //on empêche le lien de nous diriger vers une autre page
        event.preventDefault();

        //on ajoute alors la classe "active" pour ajouter le fondu au noir
        transition.classList.add('active')
    })
}

 // connaitre sur quel lien a etait cliqué
 lienclic = event.target.href

 //On attend un peu que l'animation et se joue et on dirige vers le lien 
 setTimeout(function(){
     window.location.href = lienclic
 }, 800)