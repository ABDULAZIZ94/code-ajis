import { Component, OnInit } from '@angular/core';
import {HomeDataService} from '../../services/home-data.service';

//home tutorial show preview of this website
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public hds: HomeDataService) { }

  ngOnInit(): void {
    
  }

}
