import { Injectable, OnInit } from '@angular/core';
import { CloudDataService } from './cloud-data.service';
import { TutorialCatalog } from '../models/TutorialCatalog';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  hashes;
  catalog:Array<TutorialCatalog>;
  tags =[
    { tag:'angular', cumulative:0},
    { tag:'code', cumulative:0},
    { tag:'css', cumulative:0 }, 
    { tag:'html5', cumulative:0 }, 
    { tag:'laravel', cumulative:0 },
    { tag:'php', cumulative:0 },
    { tag:'python', cumulative:0},
    { tag:'vuejs', cumulative:0},
    { tag:'wordpress', cumulative:0},
    ];
  // homeStat;
  constructor(public cd: CloudDataService) { this.catalog = new Array<TutorialCatalog>() }
  getHomeHash = ()=>{this.cd.getHash().subscribe(res => { this.hashes = res; this.extractHash(); } )}
  extractHash = ()=>{
    if(this.hashes != null)
      for(let i in this.hashes){
        let t = new TutorialCatalog();
        t.id = i;
        if(this.hashes[i] != null){
          t.tag = this.hashes[i].tag;
          if(t.tag == 'angular'){
            this.tags[0].cumulative = this.tags[0].cumulative + 1;
          }
          t.title = this.hashes[i].title;
          this.catalog.push(t);
        }
      }
  }
}
