set GOOGLE_APPLICATION_CREDENTIALS=admin-key.json
export GOOGLE_APPLICATION_CREDENTIALS=admin-key.json
firebase emulators:start
firebase emulators:start --only functions

//Date.now() //admin.firestore.Timestamp.fromDate(new Date())
//time stamp *1000 =  DATE

// console.log(hash);
//Date.now() //admin.firestore.Timestamp.fromDate(new Date())