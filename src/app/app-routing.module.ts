import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './views/view-product/view-product.component';
import { ViewAuthComponent } from './views/view-auth/view-auth.component';
import { ViewMessagesComponent } from './views/view-messages/view-messages.component';
import { ViewNotificationComponent } from './views/view-notification/view-notification.component';

const routes: Routes = [
  {
    path:'products',
    component:ViewProductComponent,
    title:'Product List'
  },
  {
    path:'auth',
    component:ViewAuthComponent,
    title:'Authentification'
  },
  {
    path:'messages',
    component:ViewMessagesComponent,
    title:'Messages'
  },
  {
    path:'notifications',
    component:ViewNotificationComponent,
    title:'Notifications'
  },
  {
    path:'**',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
