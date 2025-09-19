
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOQH8Pd4s-beiefo6KdxaijlPsta1HDrE",
  authDomain: "twitter-1894b.firebaseapp.com",
  projectId: "twitter-1894b",
  storageBucket: "twitter-1894b.firebasestorage.app",
  messagingSenderId: "905552272857",
  appId: "1:905552272857:web:486d59348f126083600dc8",
  measurementId: "G-R57EHT3WSW"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);
