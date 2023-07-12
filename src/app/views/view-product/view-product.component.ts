import { Component, HostListener, inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product';
import { ProductCardFormat } from 'src/app/shared/ui/ui-product-card/types';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  public productService = inject(ProductService);
  public selectedProduct:Product | undefined;

  public cardFormat:ProductCardFormat = 'standard';

  changeProductSelection( product:Product){
    this.selectedProduct = product;
  }

  @HostListener('window:keyup.alt.c')
  toggleDisplayFormat(){
    this.cardFormat = (this.cardFormat === 'standard') ? 'compacted' : 'standard'
  }

}
