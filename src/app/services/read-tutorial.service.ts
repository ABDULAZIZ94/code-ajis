import { Injectable } from '@angular/core';
import {CloudDataService} from './cloud-data.service';
@Injectable({providedIn: 'root'})
export class ReadTutorialService {
  tutorial;
  constructor(public  cd: CloudDataService) { }
  getTutorial(t){
    this.cd.getTutorial(t).subscribe(res => this.tutorial = res);
  }
}
