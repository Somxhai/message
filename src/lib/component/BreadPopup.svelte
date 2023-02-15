<script lang="ts">
  import { fade } from "svelte/transition";

  export let text: string;
  export let className: string = "";

  export { className as class };
  export let second: number = 2;
  let toggle = false;
  export const onToggle = () => {
    toggle = true;
    setTimeout(() => (toggle = false), second * 1000);
  };
</script>

{#if toggle}
  <div
    transition:fade
    class="fixed  top-9 z-50 left-1/2 px-4 py-1 -translate-x-1/2 rounded-md {className}"
  >
    {text}
  </div>
{/if}
