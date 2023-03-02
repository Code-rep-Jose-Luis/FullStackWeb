'use strict';
function validar(){
    let f=document.formulario;
    
}

function validarNombre(){

    let f=document.formulario;
    if(f.nombre.value=="" || f.nombre.value.length<5){
        f.nombre.setCustomValidity("El campo nombre no puede estar vacio y tiene que tener al menos más de 5 caracteres");  
    }else{
        f.nombre.setCustomValidity("");
    }

    
    //f.nombre.reportValidity();

}

function validarApellido(){
    let f=document.formulario;
    if(f.apellidos.value=="" || f.apellidos.value.length<=10){
        f.apellidos.setCustomValidity("El apellidos no puede ser vacío y tiene que tener al menos más de 10 caracteres");
    }else{
        f.apellidos.setCustomValidity("");
    }
    //f.nombre.reportValidity();
    
}

function validarInformacion(){
    let f=document.formulario;
    if(!f.informacion.checked){
        f.informacion.setCustomValidity("Error el checkbox de información debe marcarse");
    }else{
        f.informacion.setCustomValidity("");
    }
    //f.nombre.reportValidity();
}

window.onload=function(){
    let f=document.formulario;
    //f.onsubmit=validar;
    f.nombre.setCustomValidity("El campo nombre no puede estar vacio y tiene que tener al menos más de 5 caracteres");  
    f.apellidos.setCustomValidity("El apellidos no puede ser vacío y tiene que tener al menos más de 10 caracteres");
    f.informacion.setCustomValidity("Error el checkbox de información debe marcarse");
    f.nombre.oninput=validarNombre;
    f.apellidos.onblur=validarApellido;
    f.informacion.addEventListener("click",validarInformacion);
    
    
    
    //document.formulario.nombre.setCustomValidity("Error el nombre no puede estar vacío");
    //f.nombre.oninput=validarNombre;
}