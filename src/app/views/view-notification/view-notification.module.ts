import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewNotificationRoutingModule } from './view-notification-routing.module';
import { ViewNotificationComponent } from './view-notification.component';


@NgModule({
  declarations: [
    ViewNotificationComponent
  ],
  imports: [
    CommonModule,
    ViewNotificationRoutingModule
  ],
  exports: [
    ViewNotificationComponent
  ]
})
export class ViewNotificationModule { }
