// firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./commounity-8c822-firebase-adminsdk-fbsvc-00697885c2.json"); // 👈 yeh aapko Firebase console se lena hoga

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
module.exports = { firestore };
