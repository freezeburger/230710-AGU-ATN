import { NgModule } from '@angular/core';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ByTitlePipe } from './pipes/by-title.pipe';
import { EllipisPipe } from './pipes/ellipis.pipe';


@NgModule({
  declarations: [
    ViewProductComponent,
    ByTitlePipe,
    EllipisPipe
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
