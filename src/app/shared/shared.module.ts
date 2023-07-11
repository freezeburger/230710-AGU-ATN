import { NgModule } from '@angular/core';
import { NgImportModule } from './ng-import.module';
import { UiModule } from './ui/ui.module';
import { LayoutModule } from './layout/layout.module';

/**
 * Shared module only re-exports other modules contents. (No Declarations)
 */
@NgModule({
  exports: [
    NgImportModule,
    UiModule,
    LayoutModule
  ]
})
export class SharedModule {
  constructor(){
    console.log(this)
  }
 }
