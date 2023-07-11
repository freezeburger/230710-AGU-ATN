import { Component, inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  public productService = inject(ProductService);

  public selectedProduct:Product | undefined;

  changeProductSelection( product:Product){
    this.selectedProduct = product;
  }

}
