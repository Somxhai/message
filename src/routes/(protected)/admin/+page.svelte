<script lang="ts">
  import AdminMessage from "$lib/component/AdminMessage.svelte";
  import ShowAmount from "$lib/component/ShowAmount.svelte";
  import { getStats } from "$lib/utils/statistics";
  import type { PageData } from "./$types";
  import notfound from "$lib/assets/notfound.jpg";
  import { getNameFromEmail, getUserByUid } from "$lib/utils/getUserInfo";
  import { capitalize } from "$lib/utils/string";
  export let data: PageData;

  // amount
  const { hasIsRead, hasIsAllow, hasMessage, all } = getStats(data.userstores, [
    "isRead",
    "message",
    "isAllow",
  ]);
</script>

<svelte:head>
  <title>Admin | Message</title>
</svelte:head>

<div class="flex overflow-x-auto border-gray-200 border-1 justify-between">
  <ShowAmount title="อ่านแล้ว" amount={hasIsRead} />
  <ShowAmount title="ตอบกลับแล้ว" amount={hasMessage} />
  <ShowAmount title="เปิดข้อความสาธารณะ" amount={hasIsAllow} />
  <!-- remove 1 because the admin -->
  <ShowAmount title="ทั้งหมด" amount={all - 1} />
</div>

<div class="my-4 border-1 border-gray-100 py-4 px-2">
  <h1 class="text-2xl text-center">อ่านแล้ว</h1>
  {#each data.userstores as store}
    {#if store.userdata.isRead}
      {#await getUserByUid(store.uid)}
        <div
          class="min-h-[6.25rem] bg-gray-200 my-4 animate-skeleton px-2 py-4"
        />
      {:then user}
        <div class="ring-2 ring-slate-200 p-4 rounded-md my-4">
          {capitalize(getNameFromEmail(user.email ?? ""))}
        </div>
      {/await}
    {/if}
  {/each}
  <h1 class="text-2xl text-center">ข้อความ</h1>
  {#if hasMessage}
    {#each data.userstores as store}
      {#if store.userdata.message}
        {#await getUserByUid(store.uid)}
          <div
            class="min-h-[6.25rem] bg-gray-200 my-4 animate-skeleton px-2 py-4"
          />
        {:then user}
          <AdminMessage
            class="min-h-[6.25rem] my-4 border-1 border-gray-100 px-2 py-4 bg-blue-50"
            username={capitalize(getNameFromEmail(user.email || "unknown"))}
            message={store.userdata.message}
          />
        {/await}
      {/if}
    {/each}
  {:else}
    <section class="-z-50 w-fit mx-auto">
      <div class="text-center mx-auto">
        <img src={notfound} alt="" class="h-auto max-w-[16rem]" />
        <p class="text-sm text-gray-500">ไม่มีคนส่งข้อความ</p>
      </div>
    </section>
  {/if}
</div>
