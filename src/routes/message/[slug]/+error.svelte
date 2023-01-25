<script lang="ts">
  import { page } from "$app/stores";
</script>

<div>
  <h1 class="text-center text-red-500 text-2xl font-medium">เกิดข้อผิดพลาด โปรดลองใหม่w</h1>
  <p class="text-gray-200">{$page.error?.message}</p>
</div>
