import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocialLoginService } from 'src/app/services/social-login.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

//write using contenteditable
//set to display using custom directive

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  @ViewChild('pRef', { static: false }) pRef: ElementRef;

  public datas;


  public titleM:String = "";
  public tagM:String = "";
  public tutorialM:String = "";

  public titleFC = new FormControl("",Validators.compose([
    Validators.required,
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tagFC = new FormControl("", Validators.compose([
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  // public tutorialFC = new FormControl("", Validators.compose([
  //   Validators.required
  // ]));

  constructor(public socialLogin:SocialLoginService) { }

  ngOnInit(): void {
    //tutorial data from has problem 
    this.socialLogin.getDatas().subscribe(
      res => { this.datas = res, console.log(res) }
    );
  }

  public async onNameChange(change) {
    this.tutorialM = change;
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

  save(){
    let data = {
      title: this.titleM,
      tag: this.tagM,
      tutorial: this.tutorialM
    };
    
    this.socialLogin.pushToDB(data).then(
      res => {
        console.log('write.save(): '+res);
      }
    );
  }

  deleteData = data => this.socialLogin.deleteData(data);
  
}
