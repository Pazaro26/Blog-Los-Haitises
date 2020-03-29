const mq = window.matchMedia("(max-width: 480px)");

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

function open_mobile() {
  if (mq.matches) {
    window.open("https://bnature-mobile-loshaitises.netlify.com/", "_self");
  } else {
    //pass
  }
}

open_mobile();

function show_overlay() {
  document.getElementById("overlay").className = "overlay";
}

function hide_overlay() {
  document.getElementById("overlay").className = "before";
}

function pagina_oficial() {
  window.open("https://www.ticketswhales.com/destinations/los-haitises-tours/")
}

function galeria_fotos() {
  window.open("")
}

function guia_hongos() {
  window.open("")
}