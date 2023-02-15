<script lang="ts">
  import HamburgerIcon from "../icons/HamburgerIcon.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let className: string = "";

  const handleClick = () => {
    dispatch("click");
  };

  export { className as class };
</script>

<button
  class="rounded-3xl hover:bg-gray-100 p-2 pointer {className}"
  on:click={handleClick}
>
  <slot />
</button>
