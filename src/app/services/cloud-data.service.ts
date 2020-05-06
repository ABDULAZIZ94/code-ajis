import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { take} from "rxjs/operators";

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
  getDatas = () => { return this.af.collection("tutorials").snapshotChanges().pipe(take(1)); }
  deleteData = async (data) => { return this.af.collection("tutorials").doc(data.payload.doc.id).delete(); }
  getTagsData = () => { return this.af.collection("tutorial_tags").valueChanges(); }
  getHomeStatusData = () => 
  { return this.af.collection('logs', ref => ref.orderBy('timestamp','desc').limit(3)).snapshotChanges().pipe(take(1)); }
  getTags = () => { return this.af.collection('tutorial_tags').valueChanges().pipe(take(1)); };
  getHash = () => { return this.af.collection('hashes').doc('0').valueChanges() }
  //experimental
  updateData = async (data) => {
    return this.af.collection("tutorials").doc(data.payload.doc.id).set(data.payload.doc.data());
   }
}
