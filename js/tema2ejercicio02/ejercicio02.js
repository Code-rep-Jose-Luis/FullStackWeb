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

function pedirEstilo(cadena,tipos) {
    let estilo = prompt(cadena).toLocaleUpperCase();
    while (!tipos.includes(estilo)) {
        alert("Error!, Introduce un tipo");
        estilo = prompt(cadena).toLocaleUpperCase();
    }
    console.log(estilo);
    return estilo;
}

let num1 = pedirNumero("Introduce 1 numero de 1 a 10: ");
let num2 = pedirNumero("Introduce cuantos valores quieres de 1 a 10: ");

if (num2 < num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}


let tipo = pedirEstilo("Introduce si quieres verlo en LISTA, PARRAFO, TABLA o DESPLEGABLE",["LISTA", "PARRAFO", "TABLA","DESPLEGABLE"]);

function dibujarLista(numero1, numero2) {
    let numero=numero1;
    let lineas=numero2;
    let cadena = "<div style='border:1px solid black;'><ul>";
    for (let i = 1; i <= lineas; i++) {
        cadena += "<li>" + numero + "X" + i + "=" + (numero * i) + "</li>";
    }
    cadena=cadena+"</ul></div>";
    console.log(cadena);
    return cadena;
}

function dibujarParrafo(numero1, numero2) {
    let numero=numero1;
    let lineas=numero2;
    let cadena = "<div style='border:1px solid black;'>";
    for (let i = 1; i <= lineas; i++) {
        cadena += "<p>" + numero + "X" + i + "=" + (numero * i) + "</p>";
    }
    cadena=cadena+"</div>";
    console.log(cadena);
    return cadena;
}
function dibujarDesplegable(numero1, numero2,nombre="select") {
    let numero=numero1;
    let lineas=numero2;
    let cadena = "<div><select name='"+nombre+"'>";
    for (let i = 1; i <= lineas; i++) {
        cadena += "<option value='"+i+"'>" + numero + "X" + i + "=" + (numero * i) + "</option>";
    }
    cadena=cadena+"</select></div>";
    console.log(cadena);
    return cadena;
}

function dibujarTabla(numero1, numero2,style="style='border:1px solid black;'") {
    let cadena = "<table>" +
    
    dibujarTab(numero1, numero2, "tr",style) +
    "</table>"
    console.log(cadena);
    return cadena;
}

function dibujarTab(numero1, numero2, tipo = "td", atributo="") {
    let numero = numero1;
    let lineas = numero2;
    let fila = tipo;
    let cadena = "";
    for (let i = 1; i <= lineas; i++) {
        cadena += "<" + fila + "><td "+atributo+">" + numero + "X" + i + "</td><td "+atributo+">=</td><td "+atributo+">" + (numero * i) + "</td></" + fila + ">";
    }
    return cadena;
}


switch (tipo) {
    case "LISTA":
        document.write(dibujarLista(num1, num2));
        break;
    case "PARRAFO":
        document.write(dibujarParrafo(num1, num2));
        break;
    case "TABLA":
        document.write(dibujarTabla(num1, num2));
    break;
    case "DESPLEGABLE":
        document.write(dibujarDesplegable(num1, num2));
    break;

}

/*function dibujar(numero1, numero2, estilo = "",atributo="") {
    let numero = numero1;
    let lineas = numero2;
    let tipo = estilo;
    let extra= atributo;
    let cadena = "";
    for (let i = 1; i <= lineas; i++) {
        cadena += "<" + tipo+" "+extra + ">" + numero + "X" + i + "=" + (numero * i) + "</" + estilo + ">";
    }
    return cadena;
}

function dibujarTab(numero1, numero2, tipo = "td", atributo) {
    let numero = numero1;
    let lineas = numero2;
    let tipo = estilo;
    let cadena = "";
    for (let i = 1; i <= lineas; i++) {
        cadena += "<" + tipo + "><td "+atributo+">" + numero + "X" + i + "</td><td "+atributo+">=</td><td "+atributo+">" + (numero * i) + "</td></" + estilo + ">";
    }
    return cadena;
}

function dibujarLista(numero1, numero2) {
    let cadena = "<div><ul>" + dibujar(numero1, numero2, "li") + "</ul></div>"
    console.log(cadena);
    return cadena;
}

function dibujarParrafo(numero1, numero2) {
    let cadena = "<div>" + dibujar(numero1, numero2, "p") + "</div>"
    console.log(cadena);
    return cadena;
}
function dibujarDesplegable(numero1, numero2) {
    let cadena = "<div>" + dibujar(numero1, numero2, "p") + "</div>"
    console.log(cadena);
    return cadena;
}

function dibujarTabla(numero1, numero2,extra="style='border:1px solid black;'") {
    let cadena = "<table>" +
        dibujarTab(numero1, numero2, "tr",extra) +
        "</table>"
    console.log(cadena);
    return cadena;
}*/


