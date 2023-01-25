import type { ContentType, FireStoreData } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, fetch }) => {
  const uid = params.slug;

  const contentResult = await fetch("/content", {
    method: "POST",
    body: JSON.stringify({
      uid,
    }),
  }).catch(() => {
    throw error(404, {
      message: "This could be the uid doesn't has content",
    });
  });

  const userstoreResult = await fetch("/database/userstore", {
    method: "POST",
    body: JSON.stringify({
      uid,
    }),
  }).catch(() => {
    throw error(404, {
      message: "This could be the uid's store is not found",
    });
  });

  const userstore = JSON.parse(await userstoreResult.text()) as FireStoreData;
  const content = JSON.parse(await contentResult.text()) as ContentType;

  return { content, uid, userstore };
};
