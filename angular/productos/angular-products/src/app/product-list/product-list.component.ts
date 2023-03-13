import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = "Mi lista de productos";
  headers = {image:"imagen",desc: 'Producto', price: 'Precio', avail: 'Disponible'};
  alturaImagen=50;
  colorTs="red";
  quieroEstilo1=true;
  quieroEstilo2=false;
  showImage = true;
  filterSearch="";


  products:IProduct[] = [{
    id: 1,
    desc: 'SSD hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
    },{
    id: 2,
    desc: 'LGA1151 Motherboard',
    avail: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
    }];

    toggleImage() {
      this.showImage = !this.showImage;
    }
    toggleFormat() {
      this.quieroEstilo1 = !this.quieroEstilo1;
      this.quieroEstilo2 = !this.quieroEstilo2;
    }
  //constructor() { }
  //ngOnInit() { }
}
