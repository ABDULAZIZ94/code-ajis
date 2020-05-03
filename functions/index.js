const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.updateTag = functions.firestore
    .document('tutorials/{doc-id}')
    .onCreate( (snap, context) => {
        const newValue = snap.data();
        const tag = newValue.tag;
        db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
            snapshot.forEach( (doc) => { 
              let id = doc.id; 
              let cumulative = doc.data().cumulative + 1 
        
              console.log('id is: ',id, 'cumulative is: '+cumulative);
              if(id!=null)
              db.collection('tutorial_tags').doc(id).update({'cumulative': cumulative})
        
              db.collection('tutorial_tags').where('tag','==',tag).get().then( (snapshot) => {
                snapshot.forEach( (doc) => { console.log(doc.id , '=>' , doc.data() )} );
              });
            } );
        })
    });