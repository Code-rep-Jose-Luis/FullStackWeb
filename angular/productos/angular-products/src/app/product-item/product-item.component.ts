import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{
  @Input() product!: IProduct;
  @Input() showImage!: boolean;
  @Input() quieroEstilo1!: boolean;
  @Input() quieroEstilo2!: boolean;
  alturaImagen=50;
  colorTs="red";

  constructor(private productosServicios:ProductosService){}
  changeRating(rating: number) {
    //this.product.rating = rating;
    this.productosServicios.modificarEstrella(this.product.id,rating).subscribe({
      next:respu=>{this.product.rating=rating;
      console.log(respu);},
      error:e=>console.log(e)
    })
    }
}
