'use strict';
/*
si pulsamos el titulo eliminar el ultimo parrafo

	

	1) Acceder al nodo titulo

	2) Añadir evento click al titulo

	3) Desarrollar funcion que elimine el ultimo parrafo

		3.1) Acceder al ultimo parrafo

		3.2) Eliminar ese ultimo parrafo usando removeChild

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
