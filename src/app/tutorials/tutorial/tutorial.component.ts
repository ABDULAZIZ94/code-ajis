import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  times=[1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
