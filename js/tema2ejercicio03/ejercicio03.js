'use strict'


function pedirCadena(cadena) {
    let respuesta = prompt(cadena);
    while (!isNaN(respuesta)) {
        alert("Error!, no se a introducido una cadena");
        respuesta = prompt(cadena);
    }
    return ""+respuesta;

}

function buscarCadena(){
    let cadena1=pedirCadena("Cadena Inicial: ");

    let cadena2=pedirCadena("Cadena a buscar: ");

    let cadena3=pedirCadena("Cadena a remplazar: ");

    let cadena4=cadena1.replaceAll(cadena2,cadena3);

    document.write("<p>"+cadena4+"</p>");

}

function buscarTradicional(){
    let cadena1=pedirCadena("Cadena Inicial: ");

    let cadena2=pedirCadena("Cadena a buscar: ");

    let cadena3=pedirCadena("Cadena a remplazar: ");

    let cadena4=cadena1.replaceAll(cadena2,cadena3);
    let contador=0;
    let pos=0;
        
    do{
        pos=cadena1.indexOf(cadena2,pos);
        if(pos!=-1){
            pos=pos+cadena2.length();
            contador++;
        }

    }while(pos!=-1);       
        
}


buscarCadena();