import { getUserUidByCookie } from "$lib/api/server/user.server";
import type { FireStoreData } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch, url }) => {
  const req = await fetch("/session", {
    method: "GET",
  });

  const session = await req.text();
  return {}
};
