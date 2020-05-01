import { Component, OnInit } from '@angular/core';
import {  NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';
import { SocialLoginService } from './services/social-login.service';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'code-ajis';
  contextMenu =[{title:"login"},{title:"logout"}];
  constructor(public router: Router, public ls:SocialLoginService, private nbMenuService: NbMenuService){
  }
  login = ()=> {
    this.router.navigate(['social-login']);
  }
  logout = ()=>{
    this.ls.logout();
  }
  ngOnInit(){
    this.mon_avatar();
  } 
  mon_avatar = ()=> {
    this.nbMenuService.onItemClick().pipe(
      filter(({ tag }) => tag === 'avatar-context-menu'),
      map(({ item: { title } }) => title),
    ).subscribe({
      next: title =>{
        switch(title) {
          case this.contextMenu[0].title:
            this.login();
          case this.contextMenu[1].title:
            this.logout();
          default:break; 
        }
      }
    });
  }
}
