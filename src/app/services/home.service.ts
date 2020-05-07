import { Injectable, OnInit } from '@angular/core';
import { CloudDataService } from './cloud-data.service';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  hashes;
  tags =[
    { tag:'angular', value:0},
    { tag:'code', value:0},
    { tag:'css', value:0 }, 
    { tag:'html5', value:0 }, 
    { tag:'laravel', value:0 },
    { tag:'php', value:0 },
    { tag:'python', value:0},
    { tag:'vuejs', value:0},
    { tag:'wordpress', value:0},
    ];
  homeStat;
  constructor(public cd: CloudDataService) { }
  getHomeHash = ()=>{this.cd.getHash().subscribe(res => this.hashes = res )}
  // getHomeTag = ()=>{
  //   this.cd.getTags().subscribe(res => this.tags = res['tags']);
  // }
}
