import { Injectable, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CloudDataService {
  constructor(public af: AngularFirestore) { }
  pushToDB = async (data) => {
    return new Promise<any>((resolve, reject) => {
      this.af.collection('tutorials').add(data).then(res => { resolve(res)}, err => reject(err));
    });
  }
  getDatas = () => { return this.af.collection("tutorials").snapshotChanges(); }
  update = () => { };
  deleteData = async (data) => { return this.af.collection("tutorials").doc(data.payload.doc.id).delete(); }
  getTagsData = () => { return this.af.collection("tutorial_tags").valueChanges(); }
}
