<script lang="ts">
  import Chat from "$lib/ui/icons/Chat.svelte";
  import Envelope from "$lib/ui/icons/Envelope.svelte";

  export let question: string = "";
  export let answer: string = "";
</script>

<div class="font-kanit my-8 space-y-2">
  <blockquote class="space-x-2 text-base">
    <Envelope class="inline-block w-5 h-5" />
    {question}
  </blockquote>
  <blockquote class="space-x-2 text-sm text-gray-500 font-light">
    <Chat class="inline-block w-4 h-4" />
    {answer}
  </blockquote>
</div>
