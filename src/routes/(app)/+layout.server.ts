import type { UserRecord } from "firebase-admin/auth";
import type { LayoutServerLoad } from "./$types";
import type { FireStoreData } from "$lib/types";
import { getUserUidByCookie } from "$lib/api/server/user.server";

export const load: LayoutServerLoad = async ({ fetch }) => {
  const req = await fetch("/session", {
    method: "GET",
  });

  const cookieReq = await fetch("/session", {
    method: "GET",
  });

  const cookie = JSON.parse(await cookieReq.text());
  if (cookie.cookie) {
    const uid = await getUserUidByCookie(cookie.cookie);
    const userStoreRequest = await fetch("/database/userstore", {
      method: "POST",
      body: JSON.stringify({
        uid,
      }),
    });
    const userRequest = await fetch("/database/user", {
      method: "POST",
      body: JSON.stringify({
        uid,
      }),
    });

    const userStore = JSON.parse(
      await userStoreRequest.text()
    ) as FireStoreData;

    const user = JSON.parse(await userRequest.text()) as UserRecord;
    return { userStore, user };
  }

  const session = await req.text();
  return { session };
};
