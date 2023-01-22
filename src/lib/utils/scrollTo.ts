export const scrollToComponent = (target: string) => {
  const el = document.querySelector(target);
  if (!el) return;
  el.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
