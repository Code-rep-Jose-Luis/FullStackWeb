"use strict";
// EJERCICIO 1
let nombre;
nombre = "Pablo";
let edad;
edad = 30;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
//EjERCICIO 2
class Rombo {
    constructor(horizontal, vertical) {
        this.DiagonalHorizontal = horizontal;
        this.DiagonalVertical = vertical;
    }
    //constructor(public DiagonalHorizontal: number,public DiagonalVertical: number) {}
    area() {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    }
}
let r = new Rombo(10, 20);
console.log(r.area());
// EJERCICIO 3
/*function suma(a: number, b: number): number {
    return a + b;
}*/
let s = (a, b) => a + b;
let spiderman = { nombre: "Peter parket", poderes: ["trepar", "fuerza", "agilidad", "telas de araña"] };
