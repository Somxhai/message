<script lang="ts">
  import { goto } from "$app/navigation";
  import MenuButton from "$lib/ui/button/MenuButton.svelte";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
  import HamburgerIcon from "$lib/ui/icons/HamburgerIcon.svelte";
  import Title from "$lib/ui/Title.svelte";
  import SideMenu from "./SideMenu.svelte";
  let onOpen: VoidFunction;
</script>

<SideMenu bind:onOpen />

<nav
  class="fixed p-2 md:px-8 w-screen flex justify-between items-center shadow-md"
>
  <div class="flex items-center">
    <MenuButton
      class="md:hidden"
      on:click={() => {
        onOpen();
      }}><HamburgerIcon size={5} /></MenuButton
    >
    <Title on:click={() => goto("/")} class="ml-4"/>
    <section
      class="font-kanit text-sm font-light space-x-2 md:space-x-8 ml-2 md:ml-8 hidden md:flex md:items-center"
    >
      <a href="/messages" class="hover:text-zinc-500">ทั้งหมด</a>
      <a href="/message" class="hover:text-zinc-500">ถึงตัวเอง</a>
      <a href="/#questionxs" class="hover:text-zinc-500">คำถาม</a>
    </section>
  </div>

  <PrimaryButton on:click={() => goto("/auth/login")}>เข้าสู่ระบบ</PrimaryButton
  >
</nav>
