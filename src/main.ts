/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { fromEvent } from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));



/* fromEvent(window, 'keydown').subscribe(evt => {
  evt.preventDefault();
  console.log(evt)
})
 */
