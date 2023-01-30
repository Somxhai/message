<script lang="ts">
  export let title: string;
  export let amount: number;
  export let className: string = "";

  export { className as class };
</script>

<div class="text-center font-kanit px-4 py-2 hover:bg-gray-100 whitespace-nowrap {className}">
    <h4 class="text-gray-600 text-xs md:text-md">{title}</h4>
    <h1 class="text-lg md:text-2xl">{amount}</h1>
</div>
