<script lang="ts">
  import { goto } from "$app/navigation";
  import { getUserData, updateData } from "$lib/api/firestore";
  import { auth } from "$lib/auth";
  import { session } from "$lib/session";
  import PrimaryButton from "$lib/ui/button/PrimaryButton.svelte";
  import { user } from "$lib/users";
  import { getNameFromEmail } from "$lib/utils/getUserInfo";
  import { capitalize } from "$lib/utils/string";
  import { Circle } from "svelte-loading-spinners";
  const layoutData = $page.data;
  let isAllowCheckbox: HTMLInputElement;
  let name: string;
  import { page } from "$app/stores";
  import { redirect } from "@sveltejs/kit";

  if (layoutData.user?.email) {
    name = capitalize(getNameFromEmail(layoutData.user.email || ""));
  }
</script>

{#if layoutData.user && layoutData.userStore}
  <div class="font-kanit md:w-2/3 mx-auto">
    <h1 class="text-center text-2xl md:text-3xl">
      สวัสดี <span class="text-blue-600 underline font-medium">{name}</span>
    </h1>
    <section class="py-6 space-y-6 border-b-2 border-gray-300">
      {#if !layoutData.userStore.isAdmin}
        <div>
          <h2 class="text-left text-lg font-normal md:text-xl">สถานะ</h2>
          <div class="text-left text-xs md:text-base space-y-2">
            {#if layoutData.userStore.isRead}
              <p>
                อ่านข้อความแล้ว <a
                  href={"/message/" + layoutData.user.uid}
                  class="underline text-green-500">อ่านอีกรอบ</a
                >
              </p>
            {:else}
              <p>
                ยังไม่อ่านข้อความ <a
                  href={"/message/" + layoutData.user.uid}
                  class="underline">ไปอ่าน?</a
                >
              </p>
            {/if}

            {#if layoutData.userStore.message}
              <p>
                ส่งข้อความแล้ว <a
                  href={"/message/" + layoutData.user.uid}
                  class="underline text-yellow-500">แก้ไข</a
                >
              </p>
            {:else}
              <p>
                ยังไม่ส่งข้อความกลับ <a
                  href={"/message/" + layoutData.user.uid}
                  class="underline">ไปส่งข้อความ?</a
                >
              </p>
            {/if}
          </div>
        </div>
        <div>
          <h2 class="text-left text-lg font-normal md:text-xl">ตั้งค่า</h2>
          <div class="flex space-x-2">
            <input
              type="checkbox"
              name="allowToView"
              bind:this={isAllowCheckbox}
              checked={layoutData.userStore.isAllow}
              on:change={async () => {
                await updateData(layoutData.user?.uid || "", {
                  isAllow: isAllowCheckbox.checked,
                });
              }}
            />
            <label for="allowToView" class="text-xs md:text-base"
              >อนุญาติให้คนอื่นดูข้อความ</label
            >
          </div>
        </div>
      {/if}
    </section>

    <div class="py-8">
      <PrimaryButton
        class="bg-red-600 py-4 px-6 mx-auto block w-fit"
        on:click={() => {
          auth.signOut().then(() => {
            goto("/login");
          });
        }}>ออกจากระบบ</PrimaryButton
      >
    </div>
  </div>
{/if}
