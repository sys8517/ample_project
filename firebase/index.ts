import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8C10u7jSo3J4opuxwUAv4UH92L5LjB-c",
  authDomain: "ampleproject.firebaseapp.com",
  projectId: "ampleproject",
  storageBucket: "ampleproject.appspot.com",
  messagingSenderId: "189414302385",
  appId: "1:189414302385:web:eac7ddae11c6151be0b890",
  measurementId: "G-LP297Z3QT4",
};

// Initialize Firebase
const ampleApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(ampleApp);
export const AmpleFirestore = getFirestore(ampleApp); // my를 자신의 프로젝트 이름으로 바꿔주세요.
export const authService = getAuth();
export const storageService = getStorage();
