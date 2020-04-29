import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocialLoginService } from 'src/app/services/social-login.service';
import { WriteService } from 'src/app/services/write.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Tutorial } from 'src/app/models/Tutorial';
import { StepType, Step } from 'src/app/models/Step';
import { async } from '@angular/core/testing';

//write using contenteditable
//set to display using custom directive

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  // @ViewChild('pRef', { static: false }) pRef: ElementRef;
  public StepType; //for apssing to template
  public datas;//datas from firestore 
  public data: Tutorial = new Tutorial();//new data instant using Tutorial data model

  copy = [1,2];

  // public titleM:String = "";
  // public tagM:String = "";
  // public tutorialM:String = "";

  //form validator maintained individually
  // public titleFC = new FormControl("",Validators.compose([
  //   Validators.required,
  //   Validators.pattern("^[A-Z]{1}.*")
  // ]));
  // public tagFC = new FormControl("", Validators.compose([
  //   Validators.pattern("^[A-Z]{1}.*")
  // ]));
  // //steps
  // public tutorialFC = new FormControl("", Validators.compose([
  //   Validators.required
  // ]));
  
  constructor( public ws:WriteService) {
    this.StepType = StepType;
   }
  ngOnInit(): void {
    //tutorial data from has problem 
    // this.socialLogin.getDatas().subscribe(
    //   res => { this.datas = res, console.log(res) }
    // );
    this.ws.getdatas();
  }
  
  //this form not ui blocking
  addCopy = async() => {
    // this.copy.push(2);
    this.ws.copy.push(2);
    // this.ws.duplicate(4);
    // console.log(JSON.stringify(this.copy)); //loging is to 
  }

  public  onNameChange = async (change) => {
    // let currentStep = new Step(StepType.featureCode);
    // currentStep.stepContent = change;
    // this.data.steps.push(currentStep) ;
    // this.pRef.nativeElement.innerHTML = change;
    // this.pRef.nativeElement.setAttribute('class', 'pRef');
  }

  pushStep = async (type:StepType)=>{
    let s = new Step();
    switch(type){
      case StepType.featureTitle: s.setType(StepType.featureTitle);this.data.steps.push(s); break;
      case StepType.featureDescription: s.setType(StepType.featureDescription);this.data.steps.push(s); break;
      case StepType.featureCode: s.setType(StepType.featureCode);this.data.steps.push(s); break;
      // default: console.log('pushstep() failed'); console.log(JSON.stringify(this.data.steps)); break;
    }
  }
  // submitTutor(){
  //   if(this.titleFC.valid && this.tagFC.valid && this.tutorialFC.valid)
  //     this.printConsole;
  //   else
  //     alert("Form Not Complete");    
  // }

  // printConsole(){
  //   console.log("title: "+this.titleM.toString());
  //   console.log("tag: " + this.tagM.toString());
  //   console.log("tutorial: " + this.tutorialM.toString());
  // }

  // save = async () => {


  //   // let data = {
  //   //   title: this.titleM,
  //   //   tag: this.tagM,
  //   //   tutorial: this.tutorialM
  //   // };

  //   this.socialLogin.pushToDB(this.data).then(
  //     res => {
  //       console.log('write.save(): ' + res);
  //     }
  //   );
  // }
  
}
