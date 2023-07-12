import { Component, ContentChildren, QueryList } from '@angular/core';
import { LayoutContentDirective } from '../directives/layout-content.directive';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent {

  @ContentChildren(LayoutContentDirective) contents!:QueryList<LayoutContentDirective>;

  ngAfterViewInit(){
    if(this.contents.length === 0) throw Error('You should have at least one "appLayoutContent"')
  }
}
