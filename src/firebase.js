import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRODwD7iFWIVPOYwcrJ3GK92Fhj6VA2Og",
  authDomain: "otp-l-b56c6.firebaseapp.com",
  projectId: "otp-l-b56c6",
  storageBucket: "otp-l-b56c6.appspot.com",
  messagingSenderId: "501963755841",
  appId: "1:501963755841:web:845ac725a41509514791c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
