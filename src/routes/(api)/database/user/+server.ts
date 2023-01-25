import { auth } from "$lib/admin.server";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { uid } = await request.json();
  const result = await auth.getUser(uid);
  return json(result);
};
