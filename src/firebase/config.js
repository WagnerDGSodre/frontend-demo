import  firebase  from "firebase/app"
import { } from 'firebase/auth'


if(!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINSENDERID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APID

    })
}

export default firebase