//let div = document.getElementsByTagName("div");


let div = document.getElementById("miDiv");

//let primerHijo = div.firstElementChild;
let hijos = div.childNodes;
let hijo = div.children;
let p1 = document.getElementById("p1");
let padre= p1.parentNode;
let titulo=document.getElementById("titulo");
let hermano = titulo.nextElementSibling.nextElementSibling;
let body = document.body;
let ultimoHijo = body.lastElementChild;
let h2 = ultimoHijo.previousElementSibling;

let enlace = document.createElement("a");
let texto = document.createTextNode("Ir al Clarin");

enlace.appendChild(texto);
enlace.setAttribute("href","http://clarin.com");
enlace.setAttribute("target","_blank");

let divEnlace = document.getElementById("enlace");
divEnlace.appendChild(enlace);


hijos[1].style.backgroundColor = "red"
console.log(h2);