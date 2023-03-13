import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productos: IProduct[], filtro: string): IProduct[] {
    const filtroDef=filtro?filtro.toLocaleLowerCase():"";
    return productos.filter((e=>e.desc.toLocaleLowerCase().includes(filtroDef)));
  }

}
