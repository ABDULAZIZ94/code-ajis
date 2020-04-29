import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'; import("firebase/auth");
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
import { rejects } from 'assert';

@Injectable({providedIn: 'root'})
export class SocialLoginService {
  public firebase: any;
  constructor( public auth: AngularFireAuth, public router: Router,
    public socialLogin: SocialLoginService, public af: AngularFirestore) {
    this.firebase = firebase;
  }
  googleLogin = async () => {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => this.router.navigate(['write']));
  }
  githubLogin = async () => {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    .then((success) => this.router.navigate(['write']));
  }
  logout = async () => {
    this.auth.signOut()
      .then((success) => this.router.navigate(['social-login']));
  }
  pushToDB = async (data) => {
    return new Promise<any>((resolve, reject) => {
      this.af.collection('tutorials')
        .add(data)
        .then(res => { }, err => rejects(err));
    });
  }
  getDatas =  () => {
    return this.af.collection("tutorials").snapshotChanges();
  }
  deleteData = async (data) => {
    return this.af
      .collection("tutorials")
      .doc(data.payload.doc.id)
      .delete();
  }
  updateTutorial = async () => {
    //coming soon
  }
}
