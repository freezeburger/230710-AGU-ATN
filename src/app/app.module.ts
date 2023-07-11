import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { ViewProductModule } from './views/view-product/view-product.module';
import { ViewAuthModule } from './views/view-auth/view-auth.module';
import { ViewMessagesModule } from './views/view-messages/view-messages.module';
import { ViewNotificationModule } from './views/view-notification/view-notification.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Core
    CoreModule,
    //Utilities
    SharedModule,
    // Routing
    AppRoutingModule,
    // Sub Modules
    ViewProductModule,
    ViewAuthModule,
    ViewMessagesModule,
    ViewNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
