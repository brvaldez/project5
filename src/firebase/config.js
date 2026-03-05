import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2GhWX5gewjJBeoi9BbsNbhEr-N_Um2dI",
  authDomain: "mini-project-05.firebaseapp.com",
  projectId: "mini-project-05",
  storageBucket: "mini-project-05.firebasestorage.app",
  messagingSenderId: "611100054242",
  appId: "1:611100054242:web:c2894e4719de558f4504bb",
  measurementId: "G-HNQDJ33L2E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;