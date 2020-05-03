const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.updateTag = functions.firestore
    .document('tutorials/{doc-id}')
    .onCreate( (snap, context) => {
        const newValue = snap.data();
        const tag = newValue.tag;
        if(tag == 'angular'){
            //increment the angular tags cumulative
        }
        db.doc('tutorial_tags').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    });