// let menu = document.querySelector('.bx-menu')
// let entete = document.querySelector('.entete')
// menu.onclick = function () {
//     // menu.classList.toggle('')
//     entete.classList.toggle('ul')

    
// }

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



