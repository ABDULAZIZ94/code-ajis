import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  @ViewChild('displayDiv') viewDiv:ElementRef;
  @Input() Name: Text; //how to use @Input decorator

  constructor() { }

  ngOnInit(): void {
  }

  process(){};

  onNameChange(change) {
    this.viewDiv.nativeElement.innerHtml = change;
    console.log(change);
  }
}
