'use strict';

function precio(producto="Producto generico",precio=100,impuesto=21){
    let nombre=""+producto;
    let price=+precio;
    let tax=+impuesto;

    if (isNaN(price)|| price<=0 || isNaN(tax) || tax>100 || tax<0) {
        console.error("Precio y/o impuesto no valido.");
    }else{
        console.log("El precio de "+nombre+" es: "+valorFinal(price,tax));
    }

}
function valorFinal(precio,impuesto){
    return precio+precio*impuesto/100;
}
precio();

precio("preoducto a",50,20);

precio("","20","10");

precio("","20",-2);
/*
precio("","20","a");
precio("","e","10");
precio("","e","a");
*/
