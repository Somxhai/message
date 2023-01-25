<script lang="ts">
  import MessageCard from "$lib/component/MessageCard.svelte";
  import type { PageData } from "./$types";
  import { hasIsAllow } from "$lib/utils/message";
  import notfound from "$lib/assets/notfound.jpg";
  export let data: PageData;
</script>

<h1 class="text-center text-2xl">ทั้งหมด</h1>
<div class="md:w-1/2 mx-auto h-full bg-gray-100">
  {#if hasIsAllow(data.contents)}
    {#each data.contents as { uid, userdata }}
      {#if userdata.isAllow}
        <MessageCard {uid} />
      {/if}
    {/each}
  {:else}
    <section class="center-screen -z-50">
      <div class="text-center mx-auto">
        <img src={notfound} alt="" class="h-auto max-w-[20rem]" />
        <p class="text-sm text-gray-500">ไม่มีใครอยากจะแชร์ข้อความ</p>
      </div>
    </section>
  {/if}
</div>
