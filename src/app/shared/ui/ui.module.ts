import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiAppbarComponent } from './ui-appbar/ui-appbar.component';
import { UiProductCardComponent } from './ui-product-card/ui-product-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UiButtonComponent,
    UiAppbarComponent,
    UiProductCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    UiButtonComponent,
    UiAppbarComponent,
    UiProductCardComponent
  ]
})
export class UiModule { }
