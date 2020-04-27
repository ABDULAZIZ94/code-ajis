import { Component, OnInit } from '@angular/core';
import {HomeDataService} from '../../services/home-data.service';
import { faPython, faPhp, faHtml5, faWordpress,faAngular, faVuejs,faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


//home tutorial show preview of this website
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faPython;
  faPhp;
  faWordpress;
  faAngular;
  faVuejs;
  faLaravel;
  faHtml5;
  faCode;

  constructor(public hds: HomeDataService) { 
    this.faPython = faPython;
    this.faPhp = faPhp;
    this.faWordpress = faWordpress;
    this.faAngular = faAngular;
    this.faVuejs = faVuejs;
    this.faLaravel = faLaravel;
    this.faHtml5 = faHtml5;
    this.faCode = faCode;
    
  }

  ngOnInit(): void {
    
  }

}
