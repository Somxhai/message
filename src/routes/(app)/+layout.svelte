<script lang="ts">
  import "../../app.css";
  import Navbar from "$lib/component/Navbar.svelte";
  import { onMount } from "svelte";
  
  onMount(() => {
    
  })
  
</script>

<Navbar />
<main>
    <slot />
</main>


<style>
    
</style>
