import type { Collections, Stats } from "$lib/types";

export const getStats = (data: Collections[], stats: Stats[]) => {
  let hasIsAllow = 0;
  let hasIsRead = 0;
  let hasMessage = 0;
  let all = 0;
  const checkIsAllow = stats.includes("isAllow");
  const checkIsRead = stats.includes("isRead");
  const checkMessage = stats.includes("message");

  for (const i of data) {
    if (checkIsAllow && i.userdata.isAllow) {
      hasIsAllow += 1;
    }

    if (checkIsRead && i.userdata.isRead) {
      hasIsRead += 1;
    }

    if (checkMessage && i.userdata.message) {
      hasMessage += 1;
    }
    all += 1;
  }

  return { hasIsAllow, hasIsRead, hasMessage, all };
};
