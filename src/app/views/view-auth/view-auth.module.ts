import { NgModule } from '@angular/core';

import { ViewAuthRoutingModule } from './view-auth-routing.module';
import { ViewAuthComponent } from './view-auth.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewAuthComponent
  ],
  imports: [
    SharedModule,
    ViewAuthRoutingModule
  ],
  exports: [
    ViewAuthComponent
  ]
})
export class ViewAuthModule {

}
