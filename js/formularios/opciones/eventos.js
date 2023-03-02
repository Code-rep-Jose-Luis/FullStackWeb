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
function lanzar() {


    let par = 0;
    let impar = 0;
    let positivos = 0;
    let negativos = 0;
    let sumaTotal = 0;
    let factorial = 1;


    function pedirNumero(cadena) {
        let numero = prompt(cadena);
        while (isNaN(numero) || numero == "" || numero < 1 || numero > 10) {
            alert("Error!, te he pedido un numero entre 1 y 10");
            numero = prompt(cadena);
        }
        return +numero;

    }

    function pedirModo(cadena, tipos) {
        let modo = prompt(cadena).toLocaleUpperCase();
        while (!tipos.includes(modo)) {
            alert("Error!, Introduce un tipo");
            modo = prompt(cadena).toLocaleUpperCase();
        }
        console.log(modo);
        return modo;
    }

    function dibujar(numero1, numero2, inicio, final, iniFila, finFila, iniCelda = "", finCelda = "") {
        let numero = numero1;
        let lineas = numero2;
        let cadena = inicio;
        for (let i = 1; i <= lineas; i++) {
            cadena += iniFila + iniCelda + numero + "X" + i + finCelda + iniCelda + "=" + finCelda + iniCelda + (numero * i) + finCelda + finFila;
        }
        return cadena + final;
    }
    function menu() {

        let modo = "";
        let num1 = 0;
        let num2 = 0;
        do {
            modo = pedirModo("Introduce si quieres verlo en LISTA, PARRAFO, TABLA, DESPLEGABLE o SALIR", ["LISTA", "PARRAFO", "TABLA", "DESPLEGABLE", "SALIR"]);

            if (modo != "SALIR") {
                num1 = pedirNumero("Introduce 1 numero de 1 a 10: ");
                num2 = pedirNumero("Introduce cuantos valores quieres de 1 a 10: ");

                if (num2 < num1) {
                    let temp = num1;
                    num1 = num2;
                    num2 = temp;
                }

                switch (modo) {
                    case "LISTA":
                        document.write(dibujar(num1, num2, "<ul>", "</ul>", "<li>", "</li>"));
                        break;
                    case "PARRAFO":
                        document.write(dibujar(num1, num2, "<div>", "</div>", "<p>", "</p>"));
                        break;
                    case "TABLA":
                        document.write(dibujar(num1, num2, "<table>", "</table>", "<tr>", "</tr>", "<td>", "</td>"));
                        break;
                    case "DESPLEGABLE":
                        document.write(dibujar(num1, num2, "<select>", "</select>", "<option>", "</option>"));
                        break;
                }
            }

        } while (modo != "SALIR")

    }
}

function validarNumero(){
    if(this.value=="" || isNaN(this.value)){
        this.setCustomValidity("El campo nombre no puede estar vacio y tiene que ser un numero");  
    }else{
        this.setCustomValidity("");
    }


}


function generarForm() {
    let b = document.body;
    let formu = document.createElement("form");
    formu.method = "#";
    formu.name = "formulario";
    let p=document.createElement("p");
    let multi = document.createElement("label");
    let texto = document.createTextNode("Tabla de Multiplicar");
    multi.appendChild(texto);
    let input = document.createElement("input");
    input.type = "text";
    input.name = "multi";  
    input.onchange=validarNumero;
    input.setCustomValidity("El campo nombre no puede estar vacio y tiene que ser un numero");  
    multi.appendChild(input);
    p.appendChild(multi);
    formu.appendChild(p);
    

    p=document.createElement("p");
    let cantidad = document.createElement("label");
    texto = document.createTextNode("Cantidad de filas");
    input = document.createElement("input");
    input.type = "text";
    input.name = "cantidad";  
    input.onchange=validarNumero;
    input.setCustomValidity("El campo nombre no puede estar vacio y tiene que ser un numero");  
    cantidad.appendChild(texto);
    cantidad.appendChild(input);
    p.appendChild(cantidad);
    formu.appendChild(p);

    p=document.createElement("p");
    let lista=document.createElement("label");
    input=document.createElement("input");
    texto = document.createTextNode("Lista");
    lista.appendChild(texto);
    input.type="radio";
    input.name="modo";
    input.value="Lista";
    input.checked=true;
    lista.appendChild(input);
    p.appendChild(lista);
    
    let parrafo=document.createElement("label");
    input=document.createElement("input");
    texto = document.createTextNode("Parrafo");
    parrafo.appendChild(texto);
    input.type="radio";
    input.name="modo";
    input.value="Parrafo";
    parrafo.appendChild(input);
    p.appendChild(parrafo);
    
    let tabla=document.createElement("label");
    input=document.createElement("input");
    texto = document.createTextNode("Tabla");
    tabla.appendChild(texto);
    input.type="radio";
    input.name="modo";
    input.value="Tabla";
    tabla.appendChild(input);
    p.appendChild(tabla);
    
    let desplegable=document.createElement("label");
    input=document.createElement("input");
    texto = document.createTextNode("Desplegable");
    desplegable.appendChild(texto);
    input.type="radio";
    input.name="modo";
    input.value="Desplegable";

    desplegable.appendChild(input);
    p.appendChild(desplegable);
    formu.appendChild(p);

    
    input=document.createElement("input");
    input.type="submit";
    input.value="Lanzar";
    
    
    formu.onsubmit=validar;
    

    
    formu.appendChild(input);
    
    b.appendChild(formu);
    let radio=document.getElementsByName("modo");
    for (let i = 0; i < radio.length; i++) {
        radio[i].onchange=cambiarDatos;
        
    }
    

}
function hacerLista(){
    let numero=document.formulario.multi.value;
    let filas=document.formulario.cantidad.value;
    let lista=document.createElement("ul");
    lista.setAttribute("name","datos");
    lista.onclick=variar;
    let elemento,texto;
    
    for (let index = 1; index <= filas; index++) {
        texto=document.createTextNode(numero+"X"+index+" "+(+numero*index));
        elemento=document.createElement("li");
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista,document.formulario);
}

function hacerParrafo(){
    let numero=document.formulario.multi.value;
    let filas=document.formulario.cantidad.value;
    let lista=document.createElement("div");
    lista.setAttribute("name","datos");
    lista.onclick=variar;
    let elemento,texto;
    
    for (let index = 1; index <= filas; index++) {
        texto=document.createTextNode(numero+"X"+index+" "+(+numero*index));
        elemento=document.createElement("p");
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista,document.formulario);
}

function hacerTabla(){
    let numero=document.formulario.multi.value;
    let filas=document.formulario.cantidad.value;
    let lista=document.createElement("table");
    lista.setAttribute("name","datos");
    lista.onclick=variar;
    let elemento,texto;
    let td1,td2,td3;
    
    for (let index = 1; index <= filas; index++) {
        td1=document.createElement("td");
        texto=document.createTextNode(numero+"X"+index);
        td1.appendChild(texto);
        
        td2=document.createElement("td");
        texto=document.createTextNode("=");
        td2.appendChild(texto);
        
        td3=document.createElement("td");
        texto=document.createTextNode(+numero*index);
        td3.appendChild(texto);

        elemento=document.createElement("tr");
        elemento.appendChild(td1);
        elemento.appendChild(td2);
        elemento.appendChild(td3);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista,document.formulario);
}

function hacerDesplegable(){
    let numero=document.formulario.multi.value;
    let filas=document.formulario.cantidad.value;
    let lista=document.createElement("select");
    lista.setAttribute("name","datos");
    lista.onchange=variar;
    let elemento,texto;
    
    for (let index = 1; index <= filas; index++) {
        texto=document.createTextNode(numero+"X"+index+" "+(+numero*index));
        elemento=document.createElement("option");
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    }
    document.body.insertBefore(lista,document.formulario);
}



function generarDatos(){
    let modo=document.formulario.modo.value;
    
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

function cambiarDatos(){

    let datos=document.getElementsByName("datos");
    
    

    if (datos!=null) {
        
        let b=document.querySelector("body");
        b.removeChild(datos[0]);
        

        generarDatos();
    }
}

function variar(){
    let check =document.querySelector('input[name="modo"]:checked')  
    if(check.parentNode.nextSibling!=null){
        check.parentNode.nextSibling.children[0].checked=true;
    }else{
        
        check.parentNode.parentNode.children[0].children[0].checked=true;;
    }
    cambiarDatos();
}

function validar(){
    generarDatos();
    
    event.preventDefault();

    //return false;
    
}

window.onload=function(){

    generarForm();
    //menu();

}
