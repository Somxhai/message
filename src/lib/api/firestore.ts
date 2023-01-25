import type { FireStoreData } from "$lib/types";

export const updateData = async (uid: string, data: object) => {
  const result = await fetch("/database/userstore", {
    method: "PATCH",
    body: JSON.stringify({
      uid,
      data,
    }),
  });
  return result;
};

export const getUserData = async (uid:string) => {
  
  const result = await fetch("/database/userstore", {
    method: "POST",
    body: JSON.stringify({ uid }),
  });
  return JSON.parse(await result.text()) as FireStoreData;
};
