// I don't know what type should I assign :(
export function clickOutside(node: Node) {
  const handleClick = (event: MouseEvent) => {
    const element = event.target as HTMLButtonElement;
    if (node && !node.contains(element) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent("click_outside", node));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
