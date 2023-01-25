<script lang="ts">
  import { goto } from "$app/navigation";
  import { getUserData, updateData } from "$lib/api/firestore";
  import Property from "$lib/component/Property.svelte";
  import ArrowLeft from "$lib/ui/icons/ArrowLeft.svelte";
  import { user } from "$lib/users";
  import type { PageData } from "./$types";
  import type { Properties } from "$lib/types";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
  import { Circle } from "svelte-loading-spinners";
  
  import { onMount } from "svelte";
  
  let error:string;
  export let data: PageData;
  // is not allow to view their content and check if uid is match the current page
  onMount(async () => {
    if (!data.userstore.isAllow && $user?.uid !== data.uid) {
    goto("/");
  } // uid is match the current page and user's message is not read
  else if ($user?.uid === data.uid && !data.userstore.isRead) {
    await updateData(data.uid, {
      isRead: true,
    });
  }
  })
  let textarea: HTMLTextAreaElement;
 const onSendMessage = async () => {
  if (textarea.value) {
    await updateData(data.uid, {
      message: textarea.value
    })
    error = "";
  } else {
    // empty
    error = "อย่าส่งข้อความเปล่ามาจ้า"

  }
 }

  const name: string = data.content.view.name;
  const html: string = data.content.view.content.html;
  const properties: Properties = data.content.view.properties;
</script>


<svelte:head>
  <title>{name} | Message</title>
</svelte:head>

{#await getUserData(data.uid)}

<div class="center-screen">
  <Circle color="#252525" />
</div>
{:then userdata} 
  <a
  href="/message"
  class="flex items-center space-x-2 md:ml-8 font-kanit hover:bg-gray-100 w-fit rounded-md py-2 px-1 text-sm md:text-base"
>
  <ArrowLeft class="w-4 h-4" />
  <span>ย้อนกลับ</span>
</a>
<div class="flex md:ml-8 px-1 py-2 flex-wrap ">
  {#each Object.entries(properties) as [property, value]}
    {#if value}
      <Property propertiesKey={property} class="mr-1 my-1" />
    {/if}
  {/each}
</div>
<blockquote class="text-center text-2xl md:text-xl py-8">
  สวัสดี <span class="text-blue-600">{name}</span>
</blockquote>

<section class="md:w-8/12 mx-auto px-4 md:p-4 text-sm md:text-base">
  {@html html}
</section>

{#if $user?.uid === data.uid}
  <form method="POST" on:submit|preventDefault={onSendMessage} class="flex flex-col justify-center my-6 max-w-[32rem] mx-auto">
    <h1 class="text-center text-lg my-4">อยากบอกหยังบ่</h1>
    <textarea
      class="resize-none focus:border-blue-600 hover:border-blue-300 border-2 rounded-md p-2"
      name="message"
      cols="30"
      rows="10"
      placeholder="พิมพ์ข้อความ"
      bind:this={textarea}
      value={userdata.message}
    />
    {#if error}
      <p class="text-center text-red-500">{error}</p>
    {/if}
    <div class="mx-auto">
      <PrimaryButton type="submit" class="px-4 py-2 min-w-[16rem] my-4 ">ส่ง</PrimaryButton>
    </div>
  </form>
{:else}
<div class="flex flex-col justify-center my-6 max-w-[32rem] mx-auto">
  <h1 class="text-center text-lg my-4">อยากบอกหยังบ่</h1>
  <textarea
    class="resize-none focus:border-blue-600 hover:border-blue-300 border-2 rounded-md p-2"
    name="message"
    cols="30"
    rows="10"
    readonly
    value={userdata.message}
    
  />
</div>
{/if}
{/await}

