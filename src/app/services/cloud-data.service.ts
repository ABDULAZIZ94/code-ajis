import { Injectable, OnInit, Output } from '@angular/core';
import * as firebase from 'firebase/app'; import("firebase/auth");
import { AngularFirestore } from '@angular/fire/firestore'
import { rejects } from 'assert';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CloudDataService implements OnInit{
  public datas;
  constructor(public af: AngularFirestore) { }
  ngOnInit() { }
  pushToDB = async (data) => {
    return new Promise<any>((resolve, reject) => {
      
      this.af.collection('tutorials').add(data)
      .then(res => { resolve(res)}, err => rejects(err));
    });
  }
  getDatas = () => {
    return this.af.collection("tutorials").snapshotChanges();
  }
  update = () => { };
  deleteData = async (data) => {
    return this.af.collection("tutorials").doc(data.payload.doc.id).delete();
  }
}
