<script lang="ts">
  import "../../app.css";
  import Navbar from "$lib/component/Navbar.svelte";
  import { Circle } from "svelte-loading-spinners";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  
</script>

<svelte:head>
  <title>Message</title>
</svelte:head>

{#if data.user === undefined}
  <div class="center-screen">
    <Circle color="#252525" />
  </div>
{:else}
  <Navbar />
  <main>
    <div class="my-8">
      <slot />
    </div>
  </main>
{/if}

<style>
  :global(input) {
    outline-color: rgb(29 78 216);
  }
  main {
    padding: 4rem 1rem;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
