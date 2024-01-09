// MENU HAMBURGUER

let button = document.querySelector('.menu_hamburguer');
let menuHamAtivo = document.querySelector(".menuHamburguerDesativo");

// ADICIONAR EVENTO AO CLIQUE DO BOTÃO DO MENU HAMBURGUER
button.addEventListener("click", clicar);

// O CLICK NO BOTÃO VAI CHAMAR ESTA FUNÇÃO,
// QUE TEM O DEVER DE ADICIONAR OU RETIRAR "menuHamburguerDesativo" 
function clicar(){

   menuHamAtivo.classList.toggle("menuHamburguerDesativo");
};

// ATIVAR DARKMODE

let botaoDark = document.querySelector(".mudarTema");
let botaoDarkMobile = document.querySelector(".darkMobile");
let corpo = document.querySelector(".bodyIndex");

botaoDark.addEventListener("click", ativarDark)

function ativarDark(){

   corpo.classList.toggle("darkModeAtivo")

   if(corpo.classList.contains("darkModeAtivo")){

     botaoDark.style.color = "#c0c0c0";
   } else {

      botaoDark.style.color = "#1d1d1d";
   }
}

botaoDarkMobile.addEventListener("click", ativarDarkMobile);

function ativarDarkMobile(){

   corpo.classList.toggle("darkModeAtivo")
}