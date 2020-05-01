import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CloudDataService } from './cloud-data.service';
import { Tutorial } from '../models/Tutorial';
import { StepType, Step } from '../models/Step';
import { TutorialModule } from '../tutorials/tutorial.module';

@Injectable({providedIn:'root'})
export class WriteService {
  public data = new Tutorial();
  public titFC = new FormControl("", Validators.compose([Validators.required,Validators.pattern("^[A-Z]{1}.*")]));
  public tagFC = new FormControl("", Validators.compose([Validators.pattern("^[A-Z]{1}.*")]));
  constructor(public cd: CloudDataService) { }
  public save = () => {this.cd.pushToDB({...this.data}).then(res => {alert(res)});}
  public pushStep = (type: StepType) => {
    let s = new Step();
    switch (type) {
      case StepType.featureTitle: s.setType(StepType.featureTitle); this.data.steps.push(s); break;
      case StepType.featureDescription: s.setType(StepType.featureDescription); this.data.steps.push(s); break;
      case StepType.featureCode: s.setType(StepType.featureCode); this.data.steps.push(s); break;
      default: s.setType(StepType.undescribed); break;
    }
  }
}
