import type { ContentType } from "$lib/types";

export const getContentById = async (uid: string) => {
  const result = await fetch("/content", {
    method: "POST",
    body: JSON.stringify({ uid }),
  });

  return JSON.parse(await result.text()) as ContentType;
};
