<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Circle } from "svelte-loading-spinners";
  const dispatch = createEventDispatcher();
  export let loading: boolean = false;
  export let className: string = "";
  export let type: "button" | "submit" | "reset" = "button";
  const handleClick = () => {
    dispatch("click");
  };

  export { className as class };
</script>

<button
  {type}
  on:click={handleClick}
  class={`rounded-md text-white font-kanit text-sm bg-blue-600 hover:brightness-125 w-fit ${className}`}
>
  {#if loading}
    <div class="mx-auto w-fit">
      <Circle size="1.25" unit="rem" color="white" />
    </div>
  {:else}
    <slot />
  {/if}
</button>
