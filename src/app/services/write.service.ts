import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialLoginService } from './social-login.service';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class WriteService {
  public copy =[1,2,3];
  writeData: FormGroup;
  // this way less versetile
  // one form control invallid all will be invallid
  // this.writeData = new FormGroup({
  //   title: new FormControl("", Validators.compose([
  //     Validators.pattern("^[AZaz]"),
  //   ])),
  //   tag: new FormControl("", Validators.compose([
  //     Validators.pattern("^[AZaz]"),
  //   ])),
  // });

  //bind to individual ngModel
  public titM: String = ""; //title data model
  public tagM: String = ""; //tag data model
  public tutM: String = ""; //tut data Model

  // instantiate individual form control
  public titFC = new FormControl("", Validators.compose([
    Validators.required,
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tagFC = new FormControl("", Validators.compose([
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tutFC = new FormControl("", Validators.compose([
    Validators.required
  ]));

  constructor(public socialLogin: SocialLoginService) { 

    
  }
  public duplicate = (x) => {
    this.copy.push(x);
  };
  public save() {
    let data = {
      title: this.titM,
      tag: this.tagM,
      tutorial: this.tutM
    };

    this.socialLogin.pushToDB(data).then(
      res => {
        console.log('write.save(): ' + res);
      }
    );
  }

}
