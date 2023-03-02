'use strict'

let par = 0;
let impar = 0;
let positivos = 0;
let negativos = 0;
let sumaTotal = 0;
let factorial = 1;


function pedirNumero(cadena) {
    let numero = prompt(cadena);
    while (isNaN(numero) || numero == "" || numero<1 || numero>10) {
        alert("Error!, te he pedido un numero entre 1 y 10");
        numero = prompt(cadena);
    }
    return +numero;

}

function pedirModo(cadena,tipos) {
    let modo = prompt(cadena).toLocaleUpperCase();
    while (!tipos.includes(modo)) {
        alert("Error!, Introduce un tipo");
        modo = prompt(cadena).toLocaleUpperCase();
    }
    console.log(modo);
    return modo;
}

function dibujar(numero1, numero2, inicio, final, iniFila, finFila, iniCelda="", finCelda="") {
    let numero = numero1;
    let lineas = numero2;
    let cadena = inicio;
    for (let i = 1; i <= lineas; i++) {
        cadena += iniFila+iniCelda+ numero + "X" + i + finCelda+iniCelda+"="+ finCelda+iniCelda + (numero * i) + finCelda+finFila;
    }
    return cadena+final;
}
function menu(){

    let modo="";
    let num1=0;
    let num2=0;
    do {
    modo = pedirModo("Introduce si quieres verlo en LISTA, PARRAFO, TABLA, DESPLEGABLE o SALIR",["LISTA", "PARRAFO", "TABLA","DESPLEGABLE","SALIR"]);
    
    if (modo!= "SALIR") {
        num1 = pedirNumero("Introduce 1 numero de 1 a 10: ");
        num2 = pedirNumero("Introduce cuantos valores quieres de 1 a 10: ");
        
        if (num2 < num1) {
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        
        switch (modo) {
            case "LISTA":
                document.write(dibujar(num1, num2,"<ul>","</ul>","<li>","</li>"));
                break;
            case "PARRAFO":
                document.write(dibujar(num1, num2,"<div>","</div>","<p>","</p>"));
                break;
            case "TABLA":
                document.write(dibujar(num1, num2,"<table>","</table>","<tr>","</tr>","<td>","</td>"));
            break;
            case "DESPLEGABLE":
                document.write(dibujar(num1, num2,"<select>","</select>","<option>","</option>"));
                break;
            }
        }
            
    }   while ( modo!="SALIR")

}

menu();