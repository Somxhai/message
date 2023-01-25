<script lang="ts">
  import { goto } from "$app/navigation";
  import { auth } from "$lib/auth";
  import "$lib/extension/string";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
  import FloatingTextBox from "$lib/ui/input/FloatingTextBox.svelte";
  import { user } from "$lib/users";
  import type { FirebaseError } from "firebase/app";

  let textBoxError: "user" | "password" | "none" = "none";
  let error = "";
  let loading = false;
  const onSignIn: svelte.JSX.EventHandler<Event, HTMLFormElement> = async ({
    currentTarget,
  }) => {
    loading = true;
    const formData = new FormData(currentTarget);
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    const cred = await auth
      .signIn(name.toEmail(), password)
      .catch((e: FirebaseError) => {
        // check error code
        switch (e.code) {
          case "auth/user-not-found":
            textBoxError = "user";
            error = "ไม่พบบัญชี";
            break;
          case "auth/wrong-password":
            textBoxError = "password";
            error = "รหัสผ่านไม่ถูกต้อง";
            break;
          default:
            textBoxError = "none";
            error = "";
            break;
        }
        loading = false;
      });
    if (cred) {
      loading = false;
      goto("/");
    }
  };
</script>

<svelte:head>
  <title>Login | Message</title>
</svelte:head>

{#if $user}
  <h1 class="text-center text-xl font-kanit my-4">เหมือนจะเข้าสู่ระบบแล้วนะ</h1>
  <PrimaryButton
    class="px-8 py-4 mt-8 block mx-auto min-w-[7.5rem]"
    on:click={() => {
      goto("/account");
    }}>ไปหน้าบัญชีไหม?</PrimaryButton
  >
{:else}
  <h1 class="text-center text-xl font-kanit my-4">เข้าสู่ระบบ</h1>
  <form class="m-auto w-fit" method="POST" on:submit|preventDefault={onSignIn}>
    <section class="space-y-4">
      <FloatingTextBox
        error={textBoxError === "user"}
        type="text"
        name="name"
        hint="ชื่อผู้ใช้"
      />
      <FloatingTextBox
        error={textBoxError === "password"}
        type="password"
        name="password"
        hint="รหัสผ่าน"
      />
    </section>
    {#if error}
      <p class="text-center text-red-600 text-sm my-2">{error}</p>
    {/if}
    <PrimaryButton
      {loading}
      type="submit"
      class="px-8 py-4 mt-4 block mx-auto min-w-[7.5rem]"
      >เข้าสู่ระบบ</PrimaryButton
    >
  </form>
{/if}
