import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productURL="http://curso.i234.me:8080/productos";
  /*constructor() {
    Injectable
  }*/

  constructor(private http: HttpClient){}

  getProductosStatic():IProduct[]{
    return [{
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
  }

  getProductos():Observable<IProduct[]>{
    return this.http.get<{
      productos:IProduct[],
      ok:boolean,
      errores?:string
    }>(this.productURL)
    .pipe(map(response=>response.productos));
  }
}
