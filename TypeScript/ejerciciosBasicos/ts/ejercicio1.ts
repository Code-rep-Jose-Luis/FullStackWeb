// EJERCICIO 1
let nombre: string;
nombre = "Pablo";
let edad: number;
edad = 30;
const PERSONAJE:object = {
    nombre: nombre,
    edad: edad
}
//EjERCICIO 2
class Rombo {

    public DiagonalHorizontal: number;
    public DiagonalVertical: number;
    constructor(horizontal: number, vertical: number) {
        this.DiagonalHorizontal = horizontal;
        this.DiagonalVertical = vertical;
    }
    //constructor(public DiagonalHorizontal: number,public DiagonalVertical: number) {}

    area(): number {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    }
}

let r=new Rombo(10,20);
console.log(r.area());
// EJERCICIO 3

/*function suma(a: number, b: number): number {
    return a + b;
}*/

let s:Function=(a:number,b:number):number=>a+b;
// Ejercicio 4
interface Iperonaje {
    nombre: string;
    poderes: string[];
}
let spiderman: Iperonaje = { nombre: "Peter parket", poderes: ["trepar", "fuerza", "agilidad", "telas de araña"] }
