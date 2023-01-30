import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import type { FireStoreData } from "$lib/types";
import { getContentById } from "$lib/api/server/content.server.";

export const POST = (async ({ request, fetch }) => {
  const body = await request.json();
  const { uid, all } = body;

  // get all messages for message page
  if (all) {
    const collectionsRequest = await fetch("/database/userstore", {
      method: "GET",
    });
    const collections = JSON.parse(await collectionsRequest.text());
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
