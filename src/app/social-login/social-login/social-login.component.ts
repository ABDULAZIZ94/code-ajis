import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { SocialLoginService } from '../../services/social-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {
  faGithub = faGithub;
  faGoogle = faGoogle;
  constructor(public authService: SocialLoginService, public router: Router) { }
  ngOnInit() {}
  githubLogin(){
    this.authService.githubLogin();
  }
  googleLogin() {
    this.authService.googleLogin();
  }
  logout() {
    this.authService.logout();
  }
}
