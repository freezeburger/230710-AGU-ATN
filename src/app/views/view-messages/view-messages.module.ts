import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMessagesRoutingModule } from './view-messages-routing.module';
import { ViewMessagesComponent } from './view-messages.component';


@NgModule({
  declarations: [
    ViewMessagesComponent
  ],
  imports: [
    CommonModule,
    ViewMessagesRoutingModule
  ],
  exports: [
    ViewMessagesComponent
  ]
})
export class ViewMessagesModule { }
