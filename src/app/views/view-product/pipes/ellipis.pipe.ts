import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../core/interfaces/product';
import { ShortText } from '../../../core/interfaces/types';

@Pipe({
  name: 'ellipis'
})
export class EllipisPipe implements PipeTransform {

  transform( products: Product[] ): Product[] {
    const maxLength = 75;

    return products.map( item => {
      const copy = {...item}
      if( copy.description.length > maxLength ) copy.description = copy.description.substring(0,maxLength) + ' [...]'
      return copy;
    })
  }
}
