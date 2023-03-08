class Serie{
    constructor(private nombre:string, private capitulos:number){}

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre=nombre;
    }
    getCapitulos():number{
        return this.capitulos;
    }
    setCapitulos(capitulos:number){
        this.capitulos=capitulos;
    }
}

let arraySeries:Serie[]=[];

function grabar():void{
    let nombreSerie=(<HTMLInputElement>document.getElementById("serie")).value;
    let capitulosSerie=+(<HTMLInputElement>document.getElementById("capitulos")).value;
    let serie:Serie;
    if (nombreSerie.trim()!==""){ 
        serie=new Serie(nombreSerie,capitulosSerie);
        arraySeries.push(serie);
    }
    console.log(arraySeries);
    (<HTMLFormElement>document.getElementsByName("formu")[0]).reset();
    
}

function borrarLista():void{
    let listado:HTMLElement=(<HTMLElement>document.getElementById("listado"))
    if (listado.childElementCount!=0){ 
        listado.removeChild(<HTMLElement>listado.lastElementChild);
    }
}

function generarLista():void{
    let listado:HTMLElement=(<HTMLElement>document.getElementById("listado"))
    let lista:HTMLUListElement=<HTMLUListElement>document.createElement("ul");
    for (let index = 0; index < arraySeries.length; index++) {
        let row:HTMLLIElement=<HTMLLIElement>document.createElement("li");
        let text:Text=document.createTextNode("Nombre: "+arraySeries[index].getNombre()+" capitulos:"+arraySeries[index].getCapitulos());
        row.appendChild(text);
        lista.appendChild(row);
    }
    listado.appendChild(lista);
}
function generarTabla():void{
    let listado:HTMLElement=(<HTMLElement>document.getElementById("listado"))
    let tabla:HTMLTableElement=<HTMLTableElement>document.createElement("table");
    let row:HTMLTableRowElement=<HTMLTableRowElement>document.createElement("tr");
    let col:HTMLTableCellElement=<HTMLTableCellElement>document.createElement("td");
    let text:Text=document.createTextNode("Nombre")
    col.append(text);
    row.appendChild(col);
    col=<HTMLTableCellElement>document.createElement("td");
    text=document.createTextNode("Capitulos")
    col.append(text);
    row.appendChild(col);
    tabla.appendChild(row);
    for (let index = 0; index < arraySeries.length; index++) {
        row=<HTMLTableRowElement>document.createElement("tr");
        text=document.createTextNode(arraySeries[index].getNombre());
        col=<HTMLTableCellElement>document.createElement("td");
        col.append(text);
        row.appendChild(col);
        text=document.createTextNode(""+arraySeries[index].getCapitulos());
        col=<HTMLTableCellElement>document.createElement("td");
        col.append(text);
        row.appendChild(col);
        tabla.appendChild(row);
    }
    listado.appendChild(tabla);
}

function mostrar():void{
    let modo:string=(<HTMLSelectElement>document.getElementById("modo")).value
    if (modo.toUpperCase()=="LISTA"){
        borrarLista();
        generarLista()
    }
    if (modo.toUpperCase()=="TABLA"){
        borrarLista();
        generarTabla()
    }
    if (modo.toUpperCase()==""){
        alert("Seleccione un modo de visualizacion");
    }
}

window.onload=function():void{
    let boton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");
    if(boton!=null)
        boton.addEventListener("click",grabar);
    (<HTMLSelectElement>document.getElementById("modo")).addEventListener("change",mostrar);
    
}