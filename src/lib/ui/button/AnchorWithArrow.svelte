<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ArrowLongRight from "../icons/ArrowLongRight.svelte";
  const dispatch = createEventDispatcher();
  const handleClick = () => {
    dispatch("click");
  };
  export let href: string;
  export let text: string;
  export let className: string;
  export { className as class };
</script>

<a {href} class="flex justify-between {className}" on:click={handleClick}>
  <span>{text}</span>
  <ArrowLongRight class="w-4 h-4" />
</a>
