import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImportModule } from '../ng-import.module';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [],
  imports: [
    NgImportModule,
    UiModule
  ]
})
export class LayoutModule { }
