import type { Collections } from "$lib/types";

export const hasIsAllow = (contents: Collections[]) => {
  for (const val of contents) {
    if (val.userdata.isAllow) {
      return true;
    }
  }
  return false;
};
