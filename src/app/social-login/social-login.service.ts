import { Injectable, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; import("firebase/auth");
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService{

  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public firebase: any;

  constructor( public auth: AngularFireAuth, public router: Router, public af: AngularFirestore) {
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
    // console.log('navigate()');
    this.auth.authState.subscribe(user => {
      if (user) {
        // console.log('user is: ' + JSON.stringify(user));
        // async () => this.router.navigate(['write']);
      } else {
        // console.log('user is: ' + JSON.stringify(user));
        // async () => this.router.navigate(['login']);
      }
    });
  }

  pushToDB(data) {
    return new Promise<any>((resolve, reject) => {
      this.af.collection('tutorials').doc('1')
        .set(data)
        .then(res => { }, err => rejects(err));
    });
  }

  getDatas(){
    return this.af.collection("tutorials").snapshotChanges();
  }
}
