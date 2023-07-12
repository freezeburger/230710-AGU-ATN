import { Component, ContentChildren, HostListener, QueryList, TemplateRef, ViewChild, inject } from '@angular/core';
import { LayoutContentDirective } from '../directives/layout-content.directive';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { LayoutMenuDirective } from '../directives/layout-menu.directive';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent {

  ngbOffCanvasService = inject(NgbOffcanvas);

  @ContentChildren(LayoutContentDirective) contents!:QueryList<LayoutContentDirective>;
  @ContentChildren(LayoutMenuDirective) menuItems!:QueryList<LayoutMenuDirective>;

  @ViewChild('menuContent') menuContent!:TemplateRef<any>;

  ngAfterViewInit(){
    if(this.contents.length === 0) throw Error('You should have at least one "appLayoutContent"')
  }

  @HostListener('window:keyup.control.m')
  openMenu(){
    if(this.menuItems.length === 0) return;
    if(this.ngbOffCanvasService.hasOpenOffcanvas()) return this.ngbOffCanvasService.dismiss();
    this.ngbOffCanvasService.open(this.menuContent);
  }
}
