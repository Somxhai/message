<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
</script>

<h1 class="text-center text-red-500 text-2xl font-bold">
  เกิดข้อผิดพลาด โปรดลองใหม่
</h1>
<p class="text-gray-200">{$page.error?.message}</p>
<PrimaryButton on:click={() => goto("/")} class="px-4 py-2 mx-auto block"
  >กลับหน้าหลัก</PrimaryButton
>
