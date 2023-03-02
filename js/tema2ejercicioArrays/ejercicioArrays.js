'use strict'


let a=[];
a.push("LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO");

a.forEach(function(element,index){
    console.log((index+1)+" "+element);
});

a.forEach((element,index)=>{
    console.log((index+1)+" "+element);
});

let b=a.map(function(element,index,array){
    return (index+1)+" "+element;
});
console.log(b);

let c=a.map(function(element,i){
    return element+" "+(i+1);
});

 c=a.map((element,i)=>{
    return element+" "+(i+1);
});


console.log(c);
a.filter(function(element){
    return element.charAt(elemento.lenght-1)=="A" && 
    element.charAt(elemento.lenght-1)=="E" && 
    element.charAt(elemento.lenght-1)=="I" && 
    element.charAt(elemento.lenght-1)=="O" && 
    element.charAt(elemento.lenght-1)=="U";
    
});

a.filter(element=>{
    return element.charAt(elemento.lenght-1)=="A" && 
    element.charAt(elemento.lenght-1)=="E" && 
    element.charAt(elemento.lenght-1)=="I" && 
    element.charAt(elemento.lenght-1)=="O" && 
    element.charAt(elemento.lenght-1)=="U";
    
});

a.sort(function(a,b){
    if(a>b)
        return 1;
    else if(a<b)
        return -1;
    else
    return 0;
})

a.sort((a,b)=>{
    if(a>b)
        return 1;
    else if(a<b)
        return -1;
    else
    return 0;
})

let square=function(x1){x1*x1};
square=x=>x*x;