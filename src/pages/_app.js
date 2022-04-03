import "../styles/globals.css";
import firebase from "firebase";
import { NextUIProvider } from "@nextui-org/react";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useEffect } from "react";
import Login from "./login";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          name: user.displayName,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
