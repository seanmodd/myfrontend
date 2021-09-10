import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDY0SagVtpBg2o-4j5j9CvDd_9KG2r0bmc',
  authDomain: 'dhungalseanmodd.firebaseapp.com',
  projectId: 'dhungalseanmodd',
  storageBucket: 'dhungalseanmodd.appspot.com',
  messagingSenderId: '643008978274',
  appId: '1:643008978274:web:90a1ce935c9c6f3d76203b',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
