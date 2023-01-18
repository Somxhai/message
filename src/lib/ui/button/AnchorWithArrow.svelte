<script lang="ts">
  import ArrowLongRight from "../icons/ArrowLongRight.svelte";
  
  export let href: string;
  export let text:string
  export let className: string;
  export { className as class };
</script>

<a {href} class="flex justify-between {className}">
  <span>{text}</span>
  <ArrowLongRight />
</a>
