<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let className: string = "";

  const handleClick = () => {
    dispatch("click");
  };

  export { className as class };
</script>

<button on:click={handleClick} class={`rounded-md text-white py-2 px-4 font-kanit text-sm bg-blue-600 hover:brightness-125 ${className}`}><slot /> </button>
