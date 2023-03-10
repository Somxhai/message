<script lang="ts">
  import { session } from "$lib/session";
  import { sideMenu } from "$lib/stores/SideMenuStore";
  import AnchorWithArrow from "$lib/ui/button/AnchorWithArrow.svelte";
  import MenuButton from "$lib/ui/button/MenuButton.svelte";
  import ArrowLongRight from "$lib/ui/icons/ArrowLongRight.svelte";
  import CloseIcon from "$lib/ui/icons/CloseIcon.svelte";
  import Title from "$lib/ui/Title.svelte";
  import { scrollToComponent } from "$lib/utils/scrollTo";

  let background: HTMLButtonElement;
  let sidebar: HTMLDivElement;

  export const onOpen = () => {
    background.style.opacity = "1";
    background.style.width = "100%";
    sidebar.style.width = "16rem";
    document.body.style.overflow = "hidden";
    sideMenu.set(true);
  };
  export const onClose = () => {
    background.style.opacity = "0";
    background.style.width = "0";
    sidebar.style.width = "0";
    document.body.style.overflow = "auto";
    sideMenu.set(false);
  };
</script>

<button class="background " on:click={onClose} bind:this={background} />

<div
  bind:this={sidebar}
  role="menubar"
  class="slide z-50 fixed bg-white h-full w-0 overflow-x-hidden shadow-sm left-0 top-0"
>
  <div class="flex items-center border-b-2 py-2 px-2">
    <MenuButton on:click={onClose}>
      <CloseIcon class="w-5 h-5" />
    </MenuButton>
    <Title class="mx-4" on:click={onClose} />
  </div>

  <section class="text-xs whitespace-nowrap">
    <div class="border-b-2 py-4">
      <p class="text-sm font-medium  text-gray-500 px-4">อ่านข้อความ</p>
      <AnchorWithArrow
        on:click={onClose}
        href="/message"
        class="hover:bg-slate-100 p-2 px-4 "
        text="ทั้งหมด"
      />
      {#if !$session.user?.isAdmin}
        <AnchorWithArrow
          on:click={onClose}
          href={$session.user ? "/message/" + $session.user?.uid : "/login"}
          class="hover:bg-slate-100 p-2 px-4 "
          text="ของตัวเอง"
        />
      {/if}
    </div>
    <div class="border-b-2 py-4">
      <a
        href="/#questions"
        on:click={() => {
          scrollToComponent("#questions");
          onClose();
        }}
        class="flex justify-between hover:bg-slate-100 px-4 py-2"
      >
        <span class="text-sm font-medium text-gray-500 hover:text-black "
          >คำถาม</span
        >
        <ArrowLongRight class="w-4 h-4" />
      </a>
    </div>

    <div class="border-b-2 py-4">
      <a
        on:click={onClose}
        href={$session.user ? "/account" : "/login"}
        class="flex justify-between hover:bg-slate-100 px-4 py-2"
      >
        <span class="text-sm font-medium text-gray-500 hover:text-black "
          >บัญชี</span
        >
        <ArrowLongRight class="w-4 h-4" />
      </a>
    </div>
    {#if $session.user?.isAdmin}
      <div class="border-b-2 py-4">
        <a
          on:click={onClose}
          href={$session.user ? "/admin" : "/login"}
          class="flex justify-between hover:bg-slate-100 px-4 py-2"
        >
          <span class="text-sm font-medium text-gray-500 hover:text-black "
            >หน้าต่างแอดมิน</span
          >
          <ArrowLongRight class="w-4 h-4" />
        </a>
      </div>
    {/if}
  </section>
</div>

<style>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    z-index: 20;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: opacity 0.2s ease-out;
  }
  .slide {
    transition: width 0.2s linear;
  }
</style>
