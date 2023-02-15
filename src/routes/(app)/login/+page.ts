import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const req = await fetch("/session", {
    method: "GET",
  });

  const cookie = JSON.parse(await req.text());
  if (cookie.cookie) {
    throw redirect(301, "/account");
  }
  return { cookie };
};
