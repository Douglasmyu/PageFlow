import {
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
  
import { auth } from "./firebase";

//magic link config
const actionCodeSettings = {
  url: "http://localhost:5173/login",
  handleCodeInApp: true,
};

//google Oauth
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

//send magic link
export const sendMagicLink = async (email) => {
  return sendSignInLinkToEmail(auth, email, actionCodeSettings);
};

//complete magic link
export const completeMagicLinkSignIn = async () => {
  if (!isSignInWithEmailLink(auth, window.location.href)) return null;

  const email =
    window.localStorage.getItem("emailForSignIn") ||
    window.prompt("Please confirm your email");

  if (!email) return null;

  const result = await signInWithEmailLink(
    auth,
    email,
    window.location.href
  );

  window.localStorage.removeItem("emailForSignIn");
  return result;
};

//logout
export const signOutUser = () => {
  return signOut(auth);
};
