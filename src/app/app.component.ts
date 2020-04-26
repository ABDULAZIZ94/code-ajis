import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-ajis';

  constructor(public router: Router){}

  login(){
    this.router.navigate(['social-login']);
  }
}
