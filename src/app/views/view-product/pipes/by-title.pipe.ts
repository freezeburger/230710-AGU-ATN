import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../core/interfaces/product';
import { ShortText } from '../../../core/interfaces/types';

@Pipe({
  name: 'byTitle'
})
export class ByTitlePipe implements PipeTransform {

  transform( products: Product[], title: ShortText ): Product[] {
    if(!title) return products;

    return products.filter( item => item.title.toLocaleLowerCase().includes( title.toLocaleLowerCase() ))
  }

}
