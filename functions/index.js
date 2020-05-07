const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({credential: admin.credential.applicationDefault()});
const db = admin.firestore();

exports.incrementTag = functions.firestore
.document('tutorials/{docId}') //cannot have -
.onCreate( (snap, context) => {
    const newValue = snap.data();
    const tag = newValue.tag;
    const title = newValue.title;
    const id = snap.id;
    let timestamp=admin.firestore.FieldValue.serverTimestamp();
q
    let hash ='{"'+id+'": {"tag":"'+tag+'","title":"'+title+'","timestamp":'+timestamp+'}}';

    db.collection('hashes').doc(0).set(JSON.parse(hash),{merge: true});
});
exports.decrementTag = functions.firestore
.document('tutorials/{docId}') //cannot have -
.onDelete( (snap, context) => {
});
