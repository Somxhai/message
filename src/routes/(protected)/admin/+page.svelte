<script lang="ts">
  import { goto } from "$app/navigation";
  import { session } from "$lib/session";

  if (!$session.isAdmin) {
    goto("/");
  }
</script>



<div>
    สวัสดี
</div>