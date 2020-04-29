import { Injectable, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CloudDataService implements OnInit{
  public datas;
  constructor(public af: AngularFirestore) { }
  ngOnInit() { }
  pushToDB = async (data) => {
    return new Promise<any>((resolve, reject) => {
      this.af.collection('tutorials').add(data).then(res => { resolve(res)}, err => reject(err));
    });
  }
  getDatas = () => { return this.af.collection("tutorials").snapshotChanges(); }
  update = () => { };
  deleteData = async (data) => { return this.af.collection("tutorials").doc(data.payload.doc.id).delete(); }
}
