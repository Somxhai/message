<script lang="ts">
  import { goto } from "$app/navigation";
  import { session } from "$lib/session";
  import MenuButton from "$lib/ui/button/MenuButton.svelte";
  import OutlinedButton from "$lib/ui/button/OutlinedButton.svelte";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
  import HamburgerIcon from "$lib/ui/icons/HamburgerIcon.svelte";
  import Title from "$lib/ui/Title.svelte";
  import { user } from "$lib/users";
  import { getNameFromEmail } from "$lib/utils/getUserInfo";
  import { scrollToComponent } from "$lib/utils/scrollTo";
  import { capitalize } from "$lib/utils/string";
  import SideMenu from "./SideMenu.svelte";

  let onOpen: VoidFunction;
</script>

<SideMenu bind:onOpen />

<nav
  class="fixed p-2 md:px-8 w-full flex justify-between items-center shadow-md bg-white"
>
  <div class="flex items-center">
    <MenuButton
      class="md:hidden"
      on:click={() => {
        onOpen();
      }}><HamburgerIcon class="h-5 w-5" /></MenuButton
    >
    <Title on:click={() => goto("/")} class="ml-4" />
    <section
      class="font-kanit text-sm font-light space-x-2 md:space-x-8 ml-2 md:ml-8 hidden md:flex md:items-center"
    >
      <a href="/message" class="hover:text-zinc-500">ทั้งหมด</a>
      {#if $session.user?.isAdmin}
        <a href="/admin">ไปหน้าแอดมิน</a>
      {:else}
        <a
          href={$user ? "/message/" + $user.uid : "/login"}
          class="hover:text-zinc-500">ถึงตัวเอง</a
        >
      {/if}
      <a
        href="/#questions"
        on:click={() => {
          scrollToComponent("#questions");
        }}
        class="hover:text-zinc-500">คำถาม</a
      >
    </section>
  </div>
  {#if $user}
    <OutlinedButton
      on:click={() => goto("/account")}
      class="px-4 py-2 hidden md:block"
    >
      {capitalize(getNameFromEmail($user?.email))}</OutlinedButton
    >
  {:else}
    <PrimaryButton
      on:click={() => goto("/login")}
      class="px-4 py-2 hidden md:block">เข้าสู่ระบบ</PrimaryButton
    >
  {/if}
</nav>
