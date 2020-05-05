import { Injectable, OnInit } from '@angular/core';
import { CloudDataService } from './cloud-data.service';
//handle form data
//call cloud data service
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public tagsData;
  public tagsData2;
  public homeStat;
  constructor(public cd: CloudDataService) { }
  getBannerData = () =>{ this.cd.getTagsData().subscribe(res => { this.tagsData = res })};
  getBannerData2 = () => { this.cd.getTagsDataAngular().subscribe( res => this.tagsData2 = res )}
  getHomeStatus = () => { this.cd.getHomeStatusData().subscribe( res => this.homeStat = res)};
}
