import { Directive, Host } from '@angular/core';
import { LayoutSidebarComponent } from '../layout-sidebar/layout-sidebar.component';

@Directive({
  selector: '[appLayoutMenu]'
})
export class LayoutMenuDirective {

  constructor(
    @Host() layout:LayoutSidebarComponent
  ) { }

}
