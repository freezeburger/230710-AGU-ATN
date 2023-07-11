import { NgModule } from '@angular/core';

import { ViewNotificationRoutingModule } from './view-notification-routing.module';
import { ViewNotificationComponent } from './view-notification.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewNotificationComponent
  ],
  imports: [
    SharedModule,
    ViewNotificationRoutingModule
  ],
  exports: [
    ViewNotificationComponent
  ]
})
export class ViewNotificationModule { }
