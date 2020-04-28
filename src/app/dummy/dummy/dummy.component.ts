import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements AfterViewInit {

  @ViewChild('pRef', { static: false }) pRef: ElementRef; //selector name must same with var name
  // @Input() Name: Text; //how to use @Input decorator

  public Display: String ;

  constructor() { }

  ngAfterViewInit() {
    // console.log(this.pRef.nativeElement.innerHTML);
    // this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!";
  }

  process(){};

  onNameChange(change) {
    // this.Display = change;
    console.log("change is: "+change);
    this.pRef.nativeElement.innerHTML = change;
    this.pRef.nativeElement.setAttribute('class', 'pRef');
  }
}
