import { Component, inject } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  public productService = inject(ProductService)

}
