import { NgModule } from '@angular/core';
import { NgImportModule } from '../ng-import.module';
import { UiModule } from '../ui/ui.module';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LayoutMenuDirective } from './directives/layout-menu.directive';
import { LayoutContentDirective } from './directives/layout-content.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    LayoutSidebarComponent,
    LayoutMenuDirective,
    LayoutContentDirective
  ],
  imports: [
    NgImportModule,
    UiModule,
    NgbModule
  ],
  exports: [
    LayoutSidebarComponent,
    LayoutMenuDirective,
    LayoutContentDirective
  ]
})
export class LayoutModule { }
