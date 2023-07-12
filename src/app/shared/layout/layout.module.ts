import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImportModule } from '../ng-import.module';
import { UiModule } from '../ui/ui.module';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';

@NgModule({
  declarations: [
    LayoutSidebarComponent
  ],
  imports: [
    NgImportModule,
    UiModule
  ],
  exports: [
    LayoutSidebarComponent
  ]
})
export class LayoutModule { }
