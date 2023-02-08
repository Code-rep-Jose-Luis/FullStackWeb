'use strict'

let par = 0;
let impar = 0;
let positivos = 0;
let negativos = 0;
let sumaTotal = 0;
let factorial = 1;


function pedirNumero(cadena) {
    let numero = prompt(cadena);
    while (isNaN(numero) || numero=="") {  
        alert("Error!, te he pedido un numero");
        numero = prompt(cadena);
    }
    return +numero;
    
}


let num1 = pedirNumero("Introduce 1 numero: ");

let num2 = pedirNumero("Introduce otro numero: ");


if (num2 < num1) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

let min = 0;

for (let i = (num1<=min)?num1:min; i <= num2; i++) {
    if (num1<=i){
        if (i % 2 == 0) {
            par++;
        } else {
            impar++;
        }
        if (i < 0) {
            negativos++;
        } else {
            positivos++;
        }
        sumaTotal += +i;
    }
    if (i>0) {
        factorial*=i;
    }
}


console.log("Numero menor: " + num1);
console.log("Numero mayor: " + num2);
console.log("Numeros par: " + par);
console.log("Numeros impar: " + impar);
console.log("Numeros positivos: " + positivos);
console.log("Numeros negativos: " + negativos);
console.log("Suma Total: " + sumaTotal);
console.log("Valor factorial: " + factorial);

document.write(
    "<p>Numero menor: " + num1 + "</p>" +
    "<p>Numero mayor: " + num2 + "</p>" +
    "<p>Numeros par: " + par + "</p>" +
    "<p>Numeros impar: " + impar + "</p>" +
    "<p>Numeros positivos: " + positivos + "</p>" +
    "<p>Numeros negativos: " + negativos + "</p>" +
    "<p>Suma Total: " + sumaTotal + "</p>" +
    "<p>Valor factorial: " + factorial + "</p>");