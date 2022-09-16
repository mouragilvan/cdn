//Ajustar a lista de assuntos
//Habilitar pra já aparecer expandida
var assuntos = document.getElementsByClassName("extendable");
assuntos[0].setAttribute("open", "open");
assuntos[0].style.cssText = "height: auto;";

var marcador_expandir = document.getElementsByClassName("remaining-items");
marcador_expandir[0].classList.add("expanded");

var show_more = document.getElementsByClassName("show-more");
show_more[0].classList.add("hidden");
