import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comfirm',
  templateUrl: './comfirm.component.html',
  styleUrls: ['./comfirm.component.css']
})
export class ComfirmComponent implements OnInit {
  v;
  constructor() { }

  ngOnInit(): void {
  }

  val(v){
    this.v = v;
  }
}
