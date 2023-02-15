import type { Collections } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const result = await fetch("/content", {
    method: "POST",
    body: JSON.stringify({
      all: true,
    }),
  }).catch(() => {
    throw error(404, {
      message: "Can not fetch content",
    });
  });

  const text = JSON.parse(await result.text()) as Collections[];
  return { contents: text };
};
