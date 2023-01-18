<script lang="ts">
  import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
    export let className:string = "";
    
    export {className as class}
    const handleClick = () => {
    dispatch("click");
  };
</script>

<button on:click={handleClick} class="text-lg font-plus border-gray-500 inline-block {className}"
  >Message</button
>
