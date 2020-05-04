const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
const db = admin.firestore();

exports.incrementTag = functions.firestore
    .document('tutorials/{docId}') //cannot have -
    .onCreate( (snap, context) => {
        const newValue = snap.data();
        const tag = newValue.tag;
        db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
            snapshot.forEach( (doc) => { 
              let id = doc.id; 
              let cumulative = doc.data().cumulative + 1 ;
              if(id!=null){
                db.collection('tutorial_tags').doc(id).update({'cumulative': cumulative});
              }
            } );
        })
    });

    exports.decrementTag = functions.firestore
    .document('tutorials/{docId}') //cannot have -
    .onDelete( (snap, context) => {
        const deletedValue = snap.data();
        const tag = deletedValue.tag;
        db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
            snapshot.forEach( (doc) => { 
              let id = doc.id; 
              let cumulative = doc.data().cumulative - 1 ;
              if(id!=null){
                db.collection('tutorial_tags').doc(id).update({'cumulative': cumulative});
              }
            } );
        })
    });
