import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { WriteService } from 'src/app/services/write.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Tutorial } from 'src/app/models/Tutorial';
import { StepType, Step } from 'src/app/models/Step';
import { SocialLoginService } from 'src/app/services/social-login.service';
import { NbDialogService } from '@nebular/theme';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css'],
})
export class WriteComponent implements OnInit {
  @ViewChild('pRef', { static: false }) pRef: ElementRef;
  // public StepType; //for passing to template
  // public datas;//datas from firestore 
  // public data: Tutorial = new Tutorial();//new data instant using Tutorial data model
  // model
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
  constructor(public ws: WriteService, private dialogService: NbDialogService ) { }
  ngOnInit(): void {}
  public getDatas = async() =>{
    // this.socialLogin.getDatas().subscribe(
    //   res => { this.datas = res, console.log(res) }
    // );
  }

  @HostListener('dataPushedToDB',['$event'])
  dataPushed(){
    this.dialogService.open(HomeComponent, { context: 'pass data in template' });
  }


  public onCodeChange =  (change) => {
    // let currentStep = new Step(StepType.featureCode);
    // currentStep.stepContent = change;
    // this.data.steps.push(currentStep) ;
    // this.pRef.nativeElement.innerHTML = change;
    // this.pRef.nativeElement.setAttribute('class', 'pRef');
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
