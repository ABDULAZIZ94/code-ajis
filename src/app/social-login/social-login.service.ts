import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; import("firebase/auth");
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SocialLoginService{

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public firebase: any;

  constructor(public auth: AngularFireAuth, public router: Router) {
    this.firebase = firebase;
  }

  async googleLogin() {
    console.log('googleLogin()');
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => this.router.navigate(['write']));
    
  }

  async githubLogin(){
    console.log('githubLogin()');
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then((success) => this.router.navigate(['write']));
  }

  async logout() {
    console.log('logout');
    this.auth.signOut()
      .then((success) => this.router.navigate(['social-login']));
  }

  async navigate() {
    console.log('navigate()');
    this.auth.authState.subscribe(user => {
      if (user) {
        console.log('user is: ' + JSON.stringify(user));
        // async () => this.router.navigate(['write']);
      } else {
        console.log('user is: ' + JSON.stringify(user));
        // async () => this.router.navigate(['login']);
      }
    });
  }

}
