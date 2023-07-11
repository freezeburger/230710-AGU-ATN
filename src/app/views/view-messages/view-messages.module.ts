import { NgModule } from '@angular/core';

import { ViewMessagesRoutingModule } from './view-messages-routing.module';
import { ViewMessagesComponent } from './view-messages.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewMessagesComponent
  ],
  imports: [
    SharedModule,
    ViewMessagesRoutingModule
  ],
  exports: [
    ViewMessagesComponent
  ]
})
export class ViewMessagesModule { }
