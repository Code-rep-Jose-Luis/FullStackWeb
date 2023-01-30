'use strict';

/*
1) Pide un string al usuario
2) Di cuantas vocales tien ese String
3) (extra) Devuelve la cadena iinvertida


*/

let cadena = prompt("Introduce 1 cadena");
let num=0
let cadenaInvertida=""
for(let i=0; i<cadena.length; i++) {
    cadenaInvertida=cadena.charAt(i)+cadenaInvertida;
    if(cadena.toLocaleLowerCase().charAt(i).search(/[aeiou]/)==0){
        num=num+1;
    }
}
console.log(cadena.match(/[aeiou]/gi).length)
console.log(cadena.split("").reverse().join(""));
document.write("<p>"+cadena+"</p>");
document.write("<p>"+num+"</p>");
document.write("<p>"+cadenaInvertida+"</p>");

let a = 1;
let b = 5;
console.log(a++); 
console.log(++a); 
console.log(++a + ++b); 
console.log(a-- + --b);