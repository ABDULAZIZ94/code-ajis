import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  constructor(public ts: TutorialService, public hs:HomeService){ 
   
  }
  ngOnInit(): void { }
}
