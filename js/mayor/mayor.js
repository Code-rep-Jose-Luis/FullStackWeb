'use strict';

/*
1) Pedir 2 numeros al ususario
2) Decidir cual es mayor de los 2
3) Haces tantos parrafos como el mayor de los 2
y el texto de los parrafos se lo pides al ususario

*/

let num = parseInt(prompt("Dame un numero"));
let num2 = +prompt("Dame otro numero");

if (num<num2) 
    num = num2;

document.write("<p>El numero: "+num+" es mayor");

let parrafo = prompt("Parrafo a escribir: ");


for (let i = 0;i<num;i++)
    document.write("<p>"+parrafo+"</p>");