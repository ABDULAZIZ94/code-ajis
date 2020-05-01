import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; import("firebase/auth");
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({ providedIn: 'root' })
export class SocialLoginService {
  public firebase: any;
  public user = "unsigged";
  constructor(public auth: AngularFireAuth, public router: Router,public af: AngularFirestore) { 
       this.firebase = firebase;
       this.retrieveUser();
  }
  public googleLogin =  () => {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((success) => this.router.navigate(['write']));
  }
  public githubLogin =  () => {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then((success) => this.router.navigate(['write']));
  }
  public logout =  () => {
    this.auth.signOut().then((success) => this.router.navigate(['social-login']));
  }
  retrieveUser =  () => {
    this.auth.user.subscribe( user => {
      if(user == null){
        this.user="logged out";return;
      }
      this.user = user.displayName;
    });
  }
}
