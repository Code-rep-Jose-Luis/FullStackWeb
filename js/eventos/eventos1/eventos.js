'use strict';
/*
1) Pedir al usuario cantidad

	2) Crear un desplegable con tantos option como el numero que ha dado.

	Elemento 1 ... Elemento N

	3) Crear tanto RADIOBUTTON como elemento tambien

	4) Si cambias el valor del radio, se cambie el desplegable y viceversa
*/



window.onload = function() {

let titulo=document.querySelector('h1');
alert(titulo.nodeName);
titulo.addEventListener('click',borrarParrafo);
let parrafos=document.querySelectorAll('p');
for(let i=parrafos.length-1;i>=0;i--){
    parrafos[i].addEventListener('click',crearParrafo);
}

function borrarParrafo(){
    let parrafos=document.querySelectorAll("p");
    let ultimoP=parrafos[parrafos.length-1];
    if(parrafos.length>0){
        ultimoP.parentNode.removeChild(ultimoP);
    }else{
        alert("No hay parrafo");
    }
}

function crearParrafo(){
    let parrafo=document.createElement("p");
    let cantidad=document.querySelectorAll("p").length;
    let texto=document.createTextNode("PARRAFO "+(cantidad+1));
    parrafo.addEventListener('click',function(){
        crearParrafo()
    });

    parrafo.appendChild(texto);
    
    document.body.appendChild(parrafo);
}

};
