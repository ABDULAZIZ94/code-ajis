import { ChangeDetectionStrategy, Inject, Component, OnInit } from '@angular/core';
import { NbSidebarService, NB_WINDOW, NbMenuService } from '@nebular/theme';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialLoginService } from './services/social-login.service';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'code-ajis';
  contextMenu =[{title:"login"},{title:"logout"}];
  // menus = ['HTML','CSS',"JS","PHP","Yii2","Laravel","CakePhp","Angular","VueJs","AngularJs"];
  menus = ['HTML', 'CSS', "JS"];
  constructor(public router: Router, public loginService:SocialLoginService,
    private sidebarService: NbSidebarService, private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window){}

  login(){
    this.router.navigate(['social-login']);
  }
  logout(){
    this.loginService.logout();
  }
  toggle() {
    this.sidebarService.toggle();
  }
  ngOnInit(){
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'avatar-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title =>{
        switch(title) {
          case this.contextMenu[0].title:
            this.login();
          case this.contextMenu[1].title:
            this.logout();
          default:break; 
        }
      });
  } 
}
