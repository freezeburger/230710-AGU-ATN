import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

console.log('Application Starting')

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
