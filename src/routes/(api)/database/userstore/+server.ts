import { firestore } from "firebase-admin";

import { type RequestHandler, json } from "@sveltejs/kit";

const db = firestore();
export const PATCH: RequestHandler = async ({ request }) => {
  const { uid, data } = await request.json();

  const update = await db.collection("users").doc(uid).update(data);
  if (update) {
    return json({ success: true });
  }
  return json({ success: false });
};

// get user data from firestore by uid
export const POST: RequestHandler = async ({ request }) => {
  const { uid } = await request.json();
  
  const result = await db.doc("users/" + uid).get();
  const data = result.data();

  return json(data);
};
