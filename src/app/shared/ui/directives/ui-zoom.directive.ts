import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUiZoom]'
})
export class UiZoomDirective {

  @HostBinding('attr.title') title = 'This is a zoomable element';
  @HostBinding('style.transition') transition = 'transform 0.4s ease';
  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transformOrigin') transformOrigin = 'center';

  constructor() {
    // console.log(this)
  }

  @HostListener('mouseenter')
  zoomIn(){
    console.log('zoomIn');
    this.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  zoomOut(){
    console.log('zoomOut')
    this.transform = 'scale(1)';
  }

}

