import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ProductCardFormat } from './types';

@Component({
  selector: 'app-ui-product-card',
  templateUrl: './ui-product-card.component.html',
  styleUrls: ['./ui-product-card.component.scss']
})
export class UiProductCardComponent {

  @Input() public format:ProductCardFormat = 'standard';

  @Input() public product:Product | undefined;
  @Output() public select = new EventEmitter<Product>();
}
