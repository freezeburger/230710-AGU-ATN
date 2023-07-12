import { NgModule } from '@angular/core';
import { NgImportModule } from '../ng-import.module';
import { UiModule } from '../ui/ui.module';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LayoutMenuDirective } from './directives/layout-menu.directive';
import { LayoutContentDirective } from './directives/layout-content.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutAutoOpenDirective } from './directives/layout-auto-open.directive';
@NgModule({
  declarations: [
    LayoutSidebarComponent,
    LayoutMenuDirective,
    LayoutContentDirective,
    LayoutAutoOpenDirective
  ],
  imports: [
    NgImportModule,
    UiModule,
    NgbModule
  ],
  exports: [
    LayoutSidebarComponent,
    LayoutMenuDirective,
    LayoutContentDirective,
    LayoutAutoOpenDirective
  ]
})
export class LayoutModule { }
