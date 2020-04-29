import { Component, OnInit } from '@angular/core';
import { SocialLoginService } from 'src/app/services/social-login.service';

//tutorial show tutorial and list of available tutorial
//child route of tutorial is the specific tutorial
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  times=[1,2,3,4,5,6,7,8,9];
 
  constructor(public socialLogin: SocialLoginService ) {

   }

  ngOnInit(): void {

  }


}
