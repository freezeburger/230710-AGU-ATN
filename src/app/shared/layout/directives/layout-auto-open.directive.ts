import { Directive, DoCheck, Host, Input, OnDestroy, OnInit, numberAttribute } from '@angular/core';
import { LayoutSidebarComponent } from '../layout-sidebar/layout-sidebar.component';

type DelayMilliseconds = number;

@Directive({
  selector: '[appLayoutAutoOpen]'
})
export class LayoutAutoOpenDirective implements OnInit, DoCheck, OnDestroy {

  @Input({ transform: numberAttribute }) appLayoutAutoOpen : DelayMilliseconds = 1500;

  // 1. Create
  constructor(
    @Host() private layout:LayoutSidebarComponent
  ) {
    // console.log(this)
  }

  // 2. DOM Initialisation
  ngOnInit(){
  }

  ngAfterViewInit(){

    this.layout.openMenu();
    setTimeout( () => this.layout.openMenu() , this.appLayoutAutoOpen );

  }

  // 3. DOM Update
  ngDoCheck(){
  }

  // 3. DOM suppression
  ngOnDestroy(){
  }

}
