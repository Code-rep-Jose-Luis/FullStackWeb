'use strict';
/*
PRIMERA PARTE)

TABLA DE MULTIPLICAR (TEXT):
CANTIDAD DE FILAS (TEXT):
RADIO PONEIS LOS 4 (TABLA, LISTA, PARRAFOS, DESPLEGABLE)
BOTON SUBMIT

LOCALIZACION: ENCIMA DEL FORMULARIO

VALIDAR:
 TODOS RELLENOS -> VALIDARLO EN EL SUBMIT
 MULTIPLICAR Y FILAS SON NUMEROS -> VALIDAR CON SETCUSTOMVALIDITY
 NIVEL PRO) HACER EL FORMULARIO CON EL DOM
SEGUNDA PARTE)

SI CAMBIAS EL RADIO AUTOMATICAMENTE TAMBIEN SE CAMBIE A LA NUEVA ESTRUCTURA

TERCERA PARTE)
UN BOTON AÑADIR. AÑADA 1 NUEVO A LA ESTRUCTURA.*/

function validarNumero() {
    if (this.value == "" || isNaN(this.value)) {
        this.setCustomValidity("El campo nombre no puede estar vacio y tiene que ser un numero");
    } else {
        this.setCustomValidity("");
    }


}


function generarForm() {
    let b = document.body;
    // Crear formulario
    let formu = document.createElement("form");
    formu.method = "#";
    formu.name = "formulario";
    // Crear campo texto para el numero a multiplicar
    let p = document.createElement("p");
    let multi = document.createElement("label");
    let texto = document.createTextNode("Tabla de Multiplicar");
    multi.appendChild(texto);
    let input = document.createElement("input");
    input.type = "text";
    input.name = "multi";
    input.onchange = validarNumero;
    input.setCustomValidity("El campo nombre no puede estar vacio y tiene que ser un numero");
    multi.appendChild(input);
    p.appendChild(multi);
    formu.appendChild(p);
    // Crear campo texto para el numero de filas
    p = document.createElement("p");
    let cantidad = document.createElement("label");
    texto = document.createTextNode("Cantidad de filas");
    input = document.createElement("input");
    input.type = "text";
    input.name = "cantidad";
    input.onchange = validarNumero;
    input.setCustomValidity("El campo nombre no puede estar vacio y tiene que ser un numero");
    cantidad.appendChild(texto);
    cantidad.appendChild(input);
    p.appendChild(cantidad);
    formu.appendChild(p);
    // Crear grupo de radio para elegir el modo de mostrar
    // Lista
    p = document.createElement("p");
    let lista = document.createElement("label");
    input = document.createElement("input");
    texto = document.createTextNode("Lista");
    lista.appendChild(texto);
    input.type = "radio";
    input.name = "modo";
    input.value = "Lista";
    input.checked = true;
    lista.appendChild(input);
    p.appendChild(lista);
    // Parrafo
    let parrafo = document.createElement("label");
    input = document.createElement("input");
    texto = document.createTextNode("Parrafo");
    parrafo.appendChild(texto);
    input.type = "radio";
    input.name = "modo";
    input.value = "Parrafo";
    parrafo.appendChild(input);
    p.appendChild(parrafo);
    // Tabla
    let tabla = document.createElement("label");
    input = document.createElement("input");
    texto = document.createTextNode("Tabla");
    tabla.appendChild(texto);
    input.type = "radio";
    input.name = "modo";
    input.value = "Tabla";
    tabla.appendChild(input);
    p.appendChild(tabla);
    // Desplegable
    let desplegable = document.createElement("label");
    input = document.createElement("input");
    texto = document.createTextNode("Desplegable");
    desplegable.appendChild(texto);
    input.type = "radio";
    input.name = "modo";
    input.value = "Desplegable";
    desplegable.appendChild(input);
    p.appendChild(desplegable);
    formu.appendChild(p);
    // Crear boton submit
    p = document.createElement("p");
    input = document.createElement("input");
    input.type = "submit";
    input.value = "Lanzar";
    formu.onsubmit = validar;
    p.appendChild(input);
    formu.appendChild(p);
    // Añadir el formulario a la página
    b.appendChild(formu);
    // Añadir el evento onclick al radio para actualizar la visualizacion

    let radio = document.getElementsByName("modo");
    for (let i = 0; i < radio.length; i++) {
        radio[i].onchange = cambiarDatos;

    }


}
function hacerLista() {
    let numero = document.formulario.multi.value;
    let filas = document.formulario.cantidad.value;
    let lista = document.createElement("ul");
    lista.setAttribute("name", "datos");
    lista.onclick = variar;
    let elemento, texto;
    for (let index = 1; index <= filas; index++) {
        texto = document.createTextNode(numero + "X" + index + " " + (+numero * index));
        elemento = document.createElement("li");
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista, document.formulario);
}

function hacerParrafo() {
    let numero = document.formulario.multi.value;
    let filas = document.formulario.cantidad.value;
    let lista = document.createElement("div");
    lista.setAttribute("name", "datos");
    lista.onclick = variar;
    let elemento, texto;
    for (let index = 1; index <= filas; index++) {
        texto = document.createTextNode(numero + "X" + index + " " + (+numero * index));
        elemento = document.createElement("p");
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista, document.formulario);
}

function hacerTabla() {
    let numero = document.formulario.multi.value;
    let filas = document.formulario.cantidad.value;
    let lista = document.createElement("table");
    lista.setAttribute("name", "datos");
    lista.onclick = variar;
    let elemento, texto;
    let td1, td2, td3;
    for (let index = 1; index <= filas; index++) {
        td1 = document.createElement("td");
        texto = document.createTextNode(numero + "X" + index);
        td1.appendChild(texto);

        td2 = document.createElement("td");
        texto = document.createTextNode("=");
        td2.appendChild(texto);

        td3 = document.createElement("td");
        texto = document.createTextNode(+numero * index);
        td3.appendChild(texto);

        elemento = document.createElement("tr");
        elemento.appendChild(td1);
        elemento.appendChild(td2);
        elemento.appendChild(td3);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista, document.formulario);
}

function hacerDesplegable() {
    let numero = document.formulario.multi.value;
    let filas = document.formulario.cantidad.value;
    let lista = document.createElement("select");
    lista.setAttribute("name", "datos");
    lista.onchange = variar;
    let elemento, texto;
    for (let index = 1; index <= filas; index++) {
        texto = document.createTextNode(numero + "X" + index + " " + (+numero * index));
        elemento = document.createElement("option");
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista, document.formulario);
}



function generarDatos() {
    let modo = document.formulario.modo.value;
    switch (modo.toLocaleUpperCase()) {
        case "LISTA":
            hacerLista();
            break;
        case "PARRAFO":
            hacerParrafo();
            break;
        case "TABLA":
            hacerTabla();
            break;
        case "DESPLEGABLE":
            hacerDesplegable();
            break;
    }
}

function cambiarDatos() {
    let datos = document.getElementsByName("datos");
    if (datos != null) {
        let b = document.querySelector("body");
        b.removeChild(datos[0]);
        generarDatos();
    }
}

function variar() {
    let check = document.querySelector('input[name="modo"]:checked')
    if (check.parentNode.nextSibling != null) {
        check.parentNode.nextSibling.children[0].checked = true;
    } else {
        check.parentNode.parentNode.children[0].children[0].checked = true;;
    }
    cambiarDatos();
}

function validar() {
    if(document.querySelectorAll('[name="datos"]').length == 0)
    {
        generarDatos();
        if (document.querySelector('input[name="boton"]') == null) {
            let addBoton = document.createElement("button");
            addBoton.type='button';
            addBoton.appendChild(document.createTextNode("Aumentar cantidad de filas"));
            addBoton.setAttribute("name", "add");
            addBoton.onclick=aumentarValor;
            let p = document.createElement("p");
            document.formulario.appendChild(p.appendChild(addBoton));
            let undoBoton= document.createElement("button");
            undoBoton.type='button';
            undoBoton.appendChild(document.createTextNode("Disminuir cantidad de filas"));
            undoBoton.setAttribute("name", "undo");
            undoBoton.onclick=disminuirValor;
            p = document.createElement("p");
            document.formulario.appendChild(p.appendChild(undoBoton));
        }
    }
    event.preventDefault();
}
function aumentarValor() {
    let valor = document.querySelector('input[name="cantidad"]');
    if (+valor.value < 10) {
        valor.value=+valor.value+1;
        cambiarDatos();
    }
}

function disminuirValor(){
    let valor = document.querySelector('input[name="cantidad"]');
    if (+valor.value > 1) {
        valor.value=+valor.value-1;
        cambiarDatos();
    }
}
window.onload = function () {
    generarForm();
}
