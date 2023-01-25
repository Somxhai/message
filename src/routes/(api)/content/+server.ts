import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { firestore } from "firebase-admin";
import type { FireStoreData } from "$lib/types";
import { getContentById } from "$lib/api/content.server.";

export const POST = (async ({ request, fetch }) => {
  const body = await request.json();
  const { uid, all } = body;
  const db = firestore();
  
  // get all messages for message page
  if (all) {
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
  }

  
  const userstore = await fetch("/database/userstore", {
    method: "POST",
    body: JSON.stringify({
      uid,
    }),
  });
  const data = JSON.parse(await userstore.text()) as FireStoreData;
  const content = await getContentById(data.content);
  return json(content);
}) satisfies RequestHandler;
