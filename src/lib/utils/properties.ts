export const getBgColorByProperty = (key: string) => {
  const bgColors: { [key: string]: string } = {
    glad: "bg-pink-200 ",
    seeyou: "bg-sky-200",
    special: "bg-yellow-200",
    goodluck: "bg-orange-200",
    thankful: "bg-cyan-200",
    want_to_know: "bg-rose-200",

    salim: "bg-orange-200",
    stupid: "bg-purple-200",
    notfriend: "bg-gray-200",
    friend: "bg-blue-200",
    sonteen: "bg-amber-200",
    edok: "bg-violet-200",
    kuy: "bg-red-200",
    ihere: "bg-green-200",
    axridge: "bg-indigo-200",
    dognature: "bg-stone-200",
  };
  return bgColors[key];
};

export const getTextColorByProperty = (key: string) => {
  const textColors: { [key: string]: string } = {
    glad: "text-pink-600 ",
    seeyou: "text-sky-600",
    special: "text-yellow-600",
    goodluck: "text-orange-600",
    thankful: "text-cyan-600",
    want_to_know: "text-rose-600",

    salim: "text-orange-600",
    stupid: "text-purple-600",
    notfriend: "text-gray-600",
    friend: "text-blue-600",
    sonteen: "text-amber-600",
    edok: "text-violet-600",
    kuy: "text-red-600",
    ihere: "text-green-600",
    axridge: "text-indigo-600",
    dognature: "text-stone-600",
  };
  return textColors[key];
};
export const getTextByProperty = (key: string) => {
  const text: { [key: string]: string } = {
    glad: "ยินดีที่ได้รู้จัก",
    seeyou: "ไว้เจอกันใหม่",
    special: "พิเศษ",
    goodluck: "โชคดี",
    thankful: "ขอบคุณ",
    want_to_know: "อยากรู้จัก",

    salim: "สลิ่ม",
    stupid: "โง่",
    notfriend: "ใครเพื่อนมึง",
    friend: "เพื่อน",
    sonteen: "ส้นตีน",
    edok: "อีดอก",
    kuy: "ควย",
    ihere: "ไอเหี้ย",
    axridge: "สันขวาน",
    dognature: "สันดานหมา",
  };
  return text[key];
};
