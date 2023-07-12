import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product';
import { ProductCardFormat } from 'src/app/shared/ui/ui-product-card/types';
import { UiZoomDirective } from 'src/app/shared/ui/directives/ui-zoom.directive';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  public productService = inject(ProductService);
  public selectedProduct:Product | undefined;

  public cardFormat:ProductCardFormat = 'standard';

  @ViewChild(UiZoomDirective) loadButton!:UiZoomDirective;

  ngAfterViewInit(){
    setTimeout( () => this.loadButton.zoomIn(), 500)
    setTimeout( () => this.loadButton.zoomOut(), 1300)
  }

  changeProductSelection( product:Product){
    this.selectedProduct = product;
  }

  @HostListener('window:keyup.alt.c')
  toggleDisplayFormat(){
    this.cardFormat = (this.cardFormat === 'standard') ? 'compacted' : 'standard'
  }

}
