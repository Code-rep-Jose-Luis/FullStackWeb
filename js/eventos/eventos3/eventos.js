'use strict';

/*
			si pulsamos el titulo eliminar el ultimo parrafo
			
			1) Pide al usuario filas y columnas
			2) Haz una tabla con esas filas y columnas usando DOM en el TABLE del HTML
			Poniendo número empezando por 1. 
			La tabla debe tener 2px solida y color verde. Y debe estar colapsada.
			3) Si pulsas sobre un TD multiplica por 2 el valor de la celda
			4) Si pasas el ratón por encima del TD que el borde del mismo se ponga
			con rojo y de 10px de grosor
			5) Si sale el ratón del TD vuelve a su borde normal
		
		*/


function multiplicar() {
    this.innerHTML = this.innerHTML * 2;
    if (this.innerHTML >= 100) {
        if (this.nextSibling.colSpan > 0) {

            this.colSpan = this.colSpan + this.nextSibling.colSpan
            this.parentNode.removeChild(this.nextSibling);
        }
    }
}
function enfocar() {
    this.style.borderColor = "red";
    this.style.borderWidth = "10px";
}
function desEnfocar() {
    this.style.borderColor = "green";
    this.style.borderWidth = "2px";
}

function pedirNumPos(texto) {
    let num;
    do {
        num = +prompt(texto);

    } while (isNaN(num) || num < 1);
    return num;
}

function lanzar(filas, columnas) {
    let tabla = document.getElementsByTagName("table")[0];
    tabla.style.border = "2px solid green";
    tabla.style.borderCollapse = "collapse";

    let numero = 1;
    for (let index = 0; index < filas; index++) {
        let row = document.createElement("tr");
        for (let index = 0; index < columnas; index++) {
            let cel = document.createElement("td");
            cel.innerHTML = numero++;
            cel.style.border = "2px solid green";
            cel.onclick = multiplicar;
            cel.onmouseover = enfocar;
            cel.onmouseout = desEnfocar;
            row.appendChild(cel);
        }
        tabla.appendChild(row);
    }
}


function validar() {
    let f=document.formu;
    if (isNaN(f.filas.value) || f.filas.value < 1) {
        alert("Las filas no son correctas");
        f.filas.focus();
        return false;

    }
    if (isNaN(f.columnas.value) || f.columnas.value < 1) {
        alert("Las columnas no son correctas");
        f.columnas.focus();
        return false;
    }
    //console.log(filas + " " + columnas);
    lanzar(f.filas.value, f.columnas.value);
    return false;
    this.preventDefault();
}

window.onload=function(){
    let f=document.formu;
    f.onsubmit=validar;
}