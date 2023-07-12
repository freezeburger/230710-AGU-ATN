import { NgModule } from '@angular/core';
import { NgImportModule } from './ng-import.module';
import { UiModule } from './ui/ui.module';
import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Shared module only re-exports other modules contents. (No Declarations)
 */
@NgModule({
  exports: [
    NgImportModule,
    NgbModule,
    UiModule,
    LayoutModule
  ]
})
export class SharedModule {
  constructor(){
    console.log(this)
  }
 }
