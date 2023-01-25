<script lang="ts">
  import { getContentById } from "$lib/api/content";
  import Property from "./Property.svelte";

  import {
    capitalize,
    getNameFromEmail,
    getUserByUid,
  } from "$lib/utils/getUserInfo";

  export let uid: string;
</script>

{#await getUserByUid(uid) then user}
  {#await getContentById(uid)}
    <div class="min-h-[6.25rem] bg-gray-200 my-4 animate-skeleton" />
  {:then content}
    <a
      class={`shadow-md rounded-md p-4 my-4 block transition-all ease-in-out hover:shadow-lg bg-white `}
      href={"/message/" + uid}
    >
      <span>{capitalize(getNameFromEmail(user.email ?? ""))}</span>
      <div class="flex py-2  overflow-y-hidden">
        {#each Object.entries(content.view.properties) as [property, value]}
          {#if value}
            <Property propertiesKey={property} class="mr-1 whitespace-nowrap" />
          {/if}
        {/each}
      </div>
    </a>
  {/await}
{/await}

<style>
  ::-webkit-scrollbar {
    height: 0.25rem;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 16px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(210, 210, 210);
    border-radius: 16px;
  }
  ::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:active {
    background: rgb(172, 172, 172);
  }
</style>
