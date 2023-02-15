import type { UserRecord } from "firebase-admin/auth";

export const getNameFromEmail = (email: string | null): string => {
  if (email) {
    const regex = /@confession.peak/;
    return email.replace(regex, "");
  }
  return "";
};

export const getUserByUid = async (uid: string) => {
  const result = await fetch("/database/user", {
    method: "POST",
    body: JSON.stringify({
      uid,
    }),
  });
  return JSON.parse(await result.text()) as UserRecord;
};
