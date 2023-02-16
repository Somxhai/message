<script lang="ts">
  import "../../app.css";
  import Navbar from "$lib/component/Navbar.svelte";
  import { Circle } from "svelte-loading-spinners";
  import { session } from "$lib/session";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  
</script>

<svelte:head>
  <title>Message</title>
</svelte:head>

{#if $session.user == undefined}
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
