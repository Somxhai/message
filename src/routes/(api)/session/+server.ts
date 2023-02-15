import { dev } from "$app/environment";
import type { RequestHandler } from "./$types";
import { auth } from "$lib/admin.server";
import { json } from "@sveltejs/kit";
import { getSession } from "$lib/api/session";

const WEEK_IN_SECONDS = 60 * 60 * 24 * 7;
const WEEK_IN_MILLISECONDS = WEEK_IN_SECONDS * 1000;

// POST receives the client-side auth token, validates it and sets a cookie for future server-requests
export const POST: RequestHandler = async ({ request, cookies }) => {
  const token = await request.text();

  const user = await auth.verifyIdToken(token);
  const sessionCookie = await auth.createSessionCookie(token, {
    expiresIn: WEEK_IN_MILLISECONDS,
  });
  const options = { maxAge: WEEK_IN_SECONDS, httpOnly: true, secure: !dev };
  cookies.set("session", sessionCookie, options);

  return json(getSession(user));
};

export const GET: RequestHandler = ({ cookies }) => {
  return json({ cookie: cookies.get("session") });
};

// DELETE clears the session cookie
export const DELETE: RequestHandler = async ({ cookies }) => {
  cookies.delete("session");

  return json(getSession(null));
};
