import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productURL = "productos";
  /*constructor() {
    Injectable
  }*/

  constructor(private http: HttpClient) { }

  getProductosStatic(): IProduct[] {
    return [{
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    }, {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    }];
  }

  getProductos(): Observable<IProduct[]> {
    return this.http.get<{
      productos: IProduct[],
      ok: boolean,
      errores?: string
    }>(this.productURL)
      .pipe(map(response => response.productos));
  }
  modificarEstrella(idProducto: number, cantidadEstrellas: number): Observable<boolean> {
    return this.http.put<{
      productos: IProduct,
      ok: boolean,
      error?: string
    }>(this.productURL + "/rating/" + idProducto, { rating: cantidadEstrellas }).pipe(
      map(respuesta => {
        console.log(respuesta.productos);
        if (!respuesta.ok) {
          throw respuesta.error;
        }
        return true;
      }),
      catchError((respuesta: HttpErrorResponse) =>
        throwError(() =>
          new Error("Error al modificar la estrella. Respuesta server: " + respuesta.status + " " + respuesta.message)
        )
      )
    )
  }

  getProducto(id:number): Observable<IProduct> {
    return this.http.get<{
      producto: IProduct,
      ok: boolean,
      errores?: string
    }>(this.productURL+"/"+id)
      .pipe(map(response => response.producto));
  }
}
