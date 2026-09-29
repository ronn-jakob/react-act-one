import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL_9YxatMhrqf1lHVMjkFE0FptVU4v02I",
  authDomain: "react-activity-5a5bc.firebaseapp.com",
  projectId: "react-activity-5a5bc",
  storageBucket: "react-activity-5a5bc.firebasestorage.app",
  messagingSenderId: "804566767149",
  appId: "1:804566767149:web:15e02858d1dfd3bc048aa4",
  measurementId: "G-96JBRCZVB9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);