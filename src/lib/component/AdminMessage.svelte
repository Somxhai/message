<script lang="ts">
  export let username: string;
  export let message: string;
  export let className: string = "";
  export { className as class };
</script>

<div class={className}>
  <p class="text-blue-600 font-medium text-2xl">{username}</p>
  <p class="my-1">{message}</p>
</div>
