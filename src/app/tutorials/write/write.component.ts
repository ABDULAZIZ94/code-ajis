import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  public titleM:String = "";
  public tagM:String = "";
  public tutorialM:String = "";

  public titleFC = new FormControl("",Validators.compose([
    Validators.required,
    Validators.pattern("^[A-Z]{1}.*")
  ]));
  public tagFC = new FormControl("");
  public tutorialFC = new FormControl("");


  constructor() { }

  ngOnInit(): void {
  }

  printConsole(){
    console.log("title: "+this.titleM.toString());
    console.log("tag: " + this.tagM.toString());
    console.log("tutorial: " + this.tutorialM.toString());
  }
}
