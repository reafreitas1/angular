import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPink]'
})
export class PinkDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#d14775'


  }

}
