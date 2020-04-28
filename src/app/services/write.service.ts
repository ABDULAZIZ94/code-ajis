import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocialLoginService } from './social-login.service';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class WriteService {

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
  public titleM: String = "";
  public tagM: String = "";
  public tutorialM: String = "";

  // instantiate individual form control
  public titleFC = new FormControl("", Validators.compose([
    Validators.required,
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tagFC = new FormControl("", Validators.compose([
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tutorialFC = new FormControl("", Validators.compose([
    Validators.required
  ]));

  constructor(public socialLogin: SocialLoginService) { 

    
  }

  public save() {
    let data = {
      title: this.titleM,
      tag: this.tagM,
      tutorial: this.tutorialM
    };

    this.socialLogin.pushToDB(data).then(
      res => {
        console.log('write.save(): ' + res);
      }
    );
  }

}
