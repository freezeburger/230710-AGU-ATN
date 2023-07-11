import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductModule } from './views/view-product/view-product.module';
import { ViewAuthModule } from './views/view-auth/view-auth.module';
import { ViewMessagesModule } from './views/view-messages/view-messages.module';
import { ViewNotificationModule } from './views/view-notification/view-notification.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Sub Modules
    ViewProductModule,
    ViewAuthModule,
    ViewMessagesModule,
    ViewNotificationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
