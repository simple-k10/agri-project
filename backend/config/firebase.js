const admin = require('firebase-admin');

const serviceAccount = require('path-to-serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<YOUR-PROJECT-ID>.firebaseio.com'
});

const auth = admin.auth();
const firestore = admin.firestore();

module.exports = { admin, auth, firestore };