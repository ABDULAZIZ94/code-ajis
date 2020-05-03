import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { faPython, faPhp, faHtml5, faWordpress,faAngular, faVuejs,faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

class Tag{
  text:String;
  icon:any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPython; faPhp; faWordpress; faAngular; faVuejs; faLaravel; faHtml5; faCode;
  tags = [];
  constructor(public hs: HomeService) { 
    this.faPython = faPython;
    this.faPhp = faPhp;
    this.faWordpress = faWordpress;
    this.faAngular = faAngular;
    this.faVuejs = faVuejs;
    this.faLaravel = faLaravel;
    this.faHtml5 = faHtml5;
    this.faCode = faCode;
  }
  ngOnInit(): void { this.hs.getBannerData(); this.hs.getBannerData2() }
}
