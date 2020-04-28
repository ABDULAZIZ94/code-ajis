import { Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appCodes]'
})
export class CodesDirective {

  @Input() text:String;

  constructor(public er: ElementRef) {
    console.log();
    er.nativeElement.innerText = "<strong>Modified</strong>"; //ineer text comes from db
  }

}
