import { getUserUidByCookie } from "$lib/api/server/user.server";
import type { FireStoreData } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import type { UserRecord } from "firebase-admin/auth";

export const load: LayoutServerLoad = async ({ fetch, url }) => {
  const req = await fetch("/session", {
    method: "GET",
  });

  const cookie = JSON.parse(await req.text());
  if (!cookie.cookie) {
    throw redirect(301, "/login");
  }
  const uid = await getUserUidByCookie(cookie.cookie);
  const userStoreRequest = await fetch("/database/userstore", {
    method: "POST",
    body: JSON.stringify({
      uid,
    }),
  });
  const userRequest = await fetch('/database/user', {
    method: "POST",
    body: JSON.stringify({
      uid,
    }),
  })

  const userStore = JSON.parse(await userStoreRequest.text()) as FireStoreData;
  

  if (!userStore.isAdmin && url.pathname.includes("admin")) {
    throw redirect(301, "/account");
  }
  const user = JSON.parse(await userRequest.text()) as UserRecord
  return  {userStore, user}
};
