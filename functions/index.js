const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
const db = admin.firestore();

exports.updateTag = functions.firestore
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

// exports.createUser = functions.firestore
//     .document('users/{userId}')
//     .onCreate((snap, context) => {
//       // Get an object representing the document
//       // e.g. {'name': 'Marie', 'age': 66}
//       const newValue = snap.data();

//       // access a particular field as you would any JS property
//       const name = newValue.name;

//       // perform desired operations ...
//     });