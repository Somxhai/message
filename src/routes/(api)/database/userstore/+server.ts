import firestore from "firebase-admin";

import { type RequestHandler, json } from "@sveltejs/kit";
import type { FireStoreData } from "$lib/types";

const db = firestore.firestore();
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
  const data = result.data() as FireStoreData;

  return json(data);
};

export const GET: RequestHandler = async () => {
  const collection = await db.collection("users").get();
  const collections = [];
  for (const val of collection.docs) {
    const uid: string = val.id;
    const userdata = val.data() as FireStoreData;
    const content = {
      uid,
      userdata,
    };
    collections.push(content);
  }
  return json(collections);
};
