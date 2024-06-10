

let menu = document.getElementById("menu")
menu.style.maxHeight="0px"

function toggleMenu(){
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight="300px";
    }
    else{
        menu.style.maxHeight="0px";
    }
}


// var bttn = bttn.document.getElementById('log');

// // Ajoutez un écouteur d'événements pour le clic sur le bouton
// bttn.addEventListener('click', function() {
//     // Redirigez vers une autre page
//     window.location.href = 'login.html';
// });

function redirectToPage() {
    // Redirection vers l'URL souhaitée
    window.location.href = "login.html";
  }
