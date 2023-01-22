import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const projectId = import.meta.env.VITE_ADMIN_PROJECTID;
const privateKey = import.meta.env.VITE_ADMIN_PRIVATEKEY.replace(/\\n/g, "\n");
const clientEmail = import.meta.env.VITE_CLIENT_EMAIL;

if (!projectId || !privateKey || !clientEmail) {
  throw new Error("Firebase admin environment variables not set");
}

const adminConfig = {
  credential: cert({ projectId, privateKey, clientEmail }),
};

// this is the server-side firebase client
export const app = getApps().length ? getApp() : initializeApp(adminConfig);
export const auth = getAuth(app);
