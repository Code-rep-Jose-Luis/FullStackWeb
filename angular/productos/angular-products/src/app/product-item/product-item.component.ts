import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

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
  changeRating(rating: number) {
    this.product.rating = rating;
    }
}
