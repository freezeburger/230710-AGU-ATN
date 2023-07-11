import { NgModule } from '@angular/core';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    SharedModule,
    ViewProductRoutingModule
  ],
  exports: [
    ViewProductComponent
  ]
})
export class ViewProductModule { }
