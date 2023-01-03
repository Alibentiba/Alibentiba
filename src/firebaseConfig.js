import {getApp,getApps,initializeApp} from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD17ZCCrNeT053U9lzXmp-X-H9k1lGBmAE",
    authDomain: "linkdin-clone-7f518.firebaseapp.com",
    projectId: "linkdin-clone-7f518",
    storageBucket: "linkdin-clone-7f518.appspot.com",
    messagingSenderId: "440946606086",
    appId: "1:440946606086:web:0b189acd4d0dfcd2230387"
  };
  const app=getApps.length>0?getApp():initializeApp(firebaseConfig)
  const storage =getStorage(app)
  const db =getFirestore(app)
  const provider = new GoogleAuthProvider();
  export{app,provider,db,storage}
