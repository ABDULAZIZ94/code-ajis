import { Injectable } from '@angular/core';
import { CloudDataService } from './cloud-data.service';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  public datas;
  constructor(public cd:CloudDataService) { }
  getdatas = () => this.cd.getDatas().subscribe(res => { this.datas = res });
  deleteData = (data) => this.cd.deleteData(data);
}
