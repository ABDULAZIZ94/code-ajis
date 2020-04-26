import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  public titleM:String = "";
  public tagM:String = "";
  public tutorialM:String = "";

  public titleFC = new FormControl(1,Validators.compose([
    Validators.required,
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tagFC = new FormControl(2, Validators.compose([
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tutorialFC = new FormControl(3, Validators.compose([
    Validators.required
  ]));

  constructor() { }

  ngOnInit(): void {
  }

  submitTutor(){
    if(this.titleFC.valid && this.tagFC.valid && this.tutorialFC.valid)
      this.printConsole;
    else
      alert("Form Not Complete");    
  }

  printConsole(){
    console.log("title: "+this.titleM.toString());
    console.log("tag: " + this.tagM.toString());
    console.log("tutorial: " + this.tutorialM.toString());
  }
}
