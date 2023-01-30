import type { Collections } from "$lib/types";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  // get all userstores
  const userstoresRequest = await fetch("/database/userstore", {
    method: "GET",
  });

  const userstores = JSON.parse(
    await userstoresRequest.text()
  ) as Collections[];

  return { userstores };
};
