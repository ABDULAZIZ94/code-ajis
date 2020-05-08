import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
@Injectable({providedIn: 'root'})
export class TutorialService {

  constructor(public hs:HomeService ) {  }
 
}
