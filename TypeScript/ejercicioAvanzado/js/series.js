"use strict";
class Serie {
    constructor(nombre, capitulos) {
        this.nombre = nombre;
        this.capitulos = capitulos;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getCapitulos() {
        return this.capitulos;
    }
    setCapitulos(capitulos) {
        this.capitulos = capitulos;
    }
}
let arraySeries = [];
function grabar() {
    let nombreSerie = document.getElementById("serie").value;
    let capitulosSerie = +document.getElementById("capitulos").value;
    let serie;
    if (nombreSerie.trim() !== "") {
        serie = new Serie(nombreSerie, capitulosSerie);
        arraySeries.push(serie);
    }
    console.log(arraySeries);
    document.getElementsByName("formu")[0].reset();
}
function borrarLista() {
    let listado = document.getElementById("listado");
    if (listado.childElementCount != 0) {
        listado.removeChild(listado.lastElementChild);
    }
}
function generarLista() {
    let listado = document.getElementById("listado");
    let lista = document.createElement("ul");
    for (let index = 0; index < arraySeries.length; index++) {
        let row = document.createElement("li");
        let text = document.createTextNode("Nombre: " + arraySeries[index].getNombre() + " capitulos:" + arraySeries[index].getCapitulos());
        row.appendChild(text);
        lista.appendChild(row);
    }
    listado.appendChild(lista);
}
function generarTabla() {
    let listado = document.getElementById("listado");
    let tabla = document.createElement("table");
    let row = document.createElement("tr");
    let col = document.createElement("td");
    let text = document.createTextNode("Nombre");
    col.append(text);
    row.appendChild(col);
    col = document.createElement("td");
    text = document.createTextNode("Capitulos");
    col.append(text);
    row.appendChild(col);
    tabla.appendChild(row);
    for (let index = 0; index < arraySeries.length; index++) {
        row = document.createElement("tr");
        text = document.createTextNode(arraySeries[index].getNombre());
        col = document.createElement("td");
        col.append(text);
        row.appendChild(col);
        text = document.createTextNode("" + arraySeries[index].getCapitulos());
        col = document.createElement("td");
        col.append(text);
        row.appendChild(col);
        tabla.appendChild(row);
    }
    listado.appendChild(tabla);
}
function mostrar() {
    let modo = document.getElementById("modo").value;
    if (modo.toUpperCase() == "LISTA") {
        borrarLista();
        generarLista();
    }
    if (modo.toUpperCase() == "TABLA") {
        borrarLista();
        generarTabla();
    }
    if (modo.toUpperCase() == "") {
        alert("Seleccione un modo de visualizacion");
    }
}
window.onload = function () {
    let boton = document.getElementById("boton");
    if (boton != null)
        boton.addEventListener("click", grabar);
    document.getElementById("modo").addEventListener("change", mostrar);
};
