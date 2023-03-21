import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  title = "Mi lista de productos";
  headers = {puntuacion:"Puntuacion",image:"imagen",desc: 'Producto', price: 'Precio', avail: 'Disponible'};
  quieroEstilo1=true;
  quieroEstilo2=false;
  showImage = true;
  filterSearch="";


  products:IProduct[]=[];

    toggleImage() {
      this.showImage = !this.showImage;
    }
    toggleFormat() {
      this.quieroEstilo1 = !this.quieroEstilo1;
      this.quieroEstilo2 = !this.quieroEstilo2;
    }
  constructor (private servicio:ProductosService){}

  ngOnInit() {
    //this.products=this.servicio.getProductosStatic();
    this.servicio.getProductos().subscribe(
      productos=>this.products=productos,
    );
    /*this.servicio.getProductos().subscribe({
      next:productos=>this.products=productos,
      error:errores=>console.log(errores),
      complete:()=>console.log("Productos traidos")
    });*/


  }
}
