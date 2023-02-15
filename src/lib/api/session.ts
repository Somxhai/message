import type { Session } from "$lib/types";
import type { DecodedIdToken } from "firebase-admin/auth";

export function getSession(user: DecodedIdToken | null): Session {
  if (user) {
    const { name, email, uid } = user;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return { user: { name, email: email!, uid } };
  }
  return { user };
}
