const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp({credential: admin.credential.applicationDefault()});
const db = admin.firestore();
const runtimeOpts = {
    timeoutSeconds: 120,//max540
    memory: '128MB' //max2GB
}
exports.hash = functions.runWith(runtimeOpts).firestore
.document('tutorials/{docId}') //cannot have -
.onCreate( (snap, context) => {
    const newValue = snap.data();
    const tag = newValue.tag;
    const title = newValue.title;
    const id = snap.id;
    const timestamp= admin.firestore.Timestamp.now(); //Date.now() //admin.firestore.Timestamp.fromDate(new Date())
    let hash = '{"'+id+'": { "tag":"'+tag+'", "title":"'+title+'","timestamp":"'+timestamp+'"} }';
    // console.log(hash);
    return db.collection('hashes').doc('0').set(JSON.parse(hash),{merge: true});
});

