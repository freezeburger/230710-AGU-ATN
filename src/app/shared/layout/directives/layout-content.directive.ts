

import { Directive, Host } from '@angular/core';
import { LayoutSidebarComponent } from '../layout-sidebar/layout-sidebar.component';

@Directive({
  selector: '[appLayoutContent]'
})
export class LayoutContentDirective {

  /**
   * Should be used in "LayoutSidebarComponent"
   *
   * @example
   * <app-layout-sidebar>
   *  <div appLayoutContent>Your content</div>
   * </app-layout-sidebar>
   */
  constructor(
    @Host() layout: LayoutSidebarComponent
  ) { }

}
