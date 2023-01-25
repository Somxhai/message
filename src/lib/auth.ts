import { derived, type Readable } from "svelte/store";
import { app } from "./app";
import type { Auth, UserCredential } from "firebase/auth";
import type { FirebaseApp } from "firebase/app";

// load the firebase auth client as a store and provide an API to access its methods
// this depends on the app store and will also only be loaded on demand
// so no firebase JS loaded unless the page needs it
const createAuth = () => {
  let auth: Auth;

  const { subscribe } = derived<Readable<FirebaseApp>, Auth>(
    app,
    ($app, set) => {
      async function init() {
        if ($app && !auth) {
          const { getAuth } = await import("firebase/auth");
          auth = getAuth($app);
          set(auth);
        }
      }

      init();
    }
  );

  async function signIn(email: string, password: string) {
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred
  }

  async function signOut() {
    const { signOut } = await import("firebase/auth");
    await signOut(auth);
  }

  
  return {
    subscribe,
    signIn,
    signOut,
  };
};

export const auth = createAuth();
