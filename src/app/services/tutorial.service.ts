import { Injectable } from '@angular/core';
import { CloudDataService } from './cloud-data.service';
import { FormControl, Validators } from '@angular/forms';
import { take} from "rxjs/operators";
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  public datas;
  public hash;
  public titFC = new FormControl("", Validators.compose([Validators.required,Validators.pattern("^[A-Z]{1}.*")]));
  constructor(public cd:CloudDataService) { }
  getdatas = () => this.cd.getDatas().subscribe(res => { this.datas = res; });
  gethash = () => this.cd.getHash().subscribe( res => { this.hash = res ; console.log(res)})
  deleteData = (data) => this.cd.deleteData(data);
}
