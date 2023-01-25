import { browser } from "$app/environment";
import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { readable } from "svelte/store";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DATABASEURL,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// load the firebase app on demand by putting it in a store
// this can then be used in derived stores for auth, firestore, and other services

function createApp() {
  let app: FirebaseApp;

  const { subscribe } = readable<FirebaseApp>(undefined, (set) => {
    async function init() {
      if (!app) {
        const { initializeApp } = await import("firebase/app");
        app = initializeApp(firebaseConfig);
      }
      set(app);
    }

    if (browser) init();
  });

  return { subscribe };
}

export const app = createApp();
