import { Injectable, OnInit } from '@angular/core';
import { CloudDataService } from './cloud-data.service';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  hashes;
  tags;
  homeStat;
  constructor(public cd: CloudDataService) { }
  getHomeHash = ()=>{this.cd.getHash().subscribe(res => this.hashes = res )}
  getHomeTag = ()=>{
    this.cd.getTags().subscribe(res => this.tags = res);
  }
}
