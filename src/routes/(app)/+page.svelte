<script lang="ts">
  import { goto } from "$app/navigation";
  import Questions from "$lib/component/Questions.svelte";
  import { questions } from "$lib/constant/questions";
  import { session } from "$lib/session";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
</script>

<section class="font-kanit pb-12">
  
  <h1 class="text-center text-2xl text-blue-600 font-semibold">Message</h1>
  <p class="text-left mx-auto w-fit font-kanit py-4">
    เป็นเว็บไซต์ที่ทำขึ้นมาเพื่อบอกเรื่องที่อยากจะบอก ผ่านทางเว็บไซต์ตัวนี้
  </p>
  <PrimaryButton
    class="px-6 py-4 w-fit mx-auto block"
    on:click={() => {
      goto($session.user ? "/message" : "/login");
    }}>ไปกันเลยไหม</PrimaryButton
  >
</section>

<section id="questions" class="pt-12">
  <h1 class="text-center text-2xl">คำถาม</h1>
  <div class="mx-auto w-fit">
    {#each questions as question}
      <Questions {...question} />
    {/each}
  </div>
</section>
