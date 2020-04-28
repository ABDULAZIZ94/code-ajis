import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'; import("firebase/auth");
import { AngularFirestore } from '@angular/fire/firestore'

//handle crud data from firestore

@Injectable({
  providedIn: 'root'
})
export class CloudDataService implements OnInit{
  

  constructor(public af: AngularFirestore) { 

  }


  ngOnInit(){
    //fetch data from firestore db
  }

  create = () => {};

  read = () => { };

  update = () => { };

  delete = () => { };

}
