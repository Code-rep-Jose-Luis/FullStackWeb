import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  product!: IProduct;
  constructor(private router: Router,private route: ActivatedRoute,
    private productService: ProductosService) { }
  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Recibimos parámetro
    this.productService.getProducto(id)
      .subscribe(producto => this.product = producto)
  }

  changeRating(rating: number) {
    this.productService.modificarEstrella(this.product.id, rating).subscribe({
      next: respu => {
        this.product.rating = rating;
        console.log(respu);
      },
      error: e => console.log(e)
    })
  }

  goBack() {
    this.router.navigate(['/products']);
    }

}
