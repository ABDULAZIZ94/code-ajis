import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CloudDataService } from './cloud-data.service';
import { Tutorial } from '../models/Tutorial';
import { SocialLoginService } from './social-login.service';

@Injectable({providedIn:'root'})
export class WriteService {
  public data = new Tutorial();
  public tags;
  public selectedTag;
  public titFC = new FormControl("", Validators.compose([Validators.required,Validators.pattern("^[A-Z]{1}.*")]));
  public tagFC = new FormControl("", Validators.compose([Validators.required]));
  constructor(public cd: CloudDataService,public  sl: SocialLoginService) { }
  public retrieveTags = () => { this.cd.getTags().subscribe( ref => this.tags = ref) }
  public save = () => {
    this.saveTutorialMetaData()
    this.cd.pushToDB({...this.data})
    .then(res => {
      alert("tutorial saved"); this.data = new Tutorial() ;
    } )
  }
  public onCodeChange =  (change) => { this.data.steps = change; }
  saveTutorialMetaData = () => { 
    this.data.author = this.sl.user;
  }
}
