<script lang="ts">
  import { afterUpdate } from "svelte";

  export let name: string;
  export let type: string;
  export let hint: string;
  let label: HTMLLabelElement;
  let textBox: HTMLInputElement;
  afterUpdate(() => {
    onAutofill();
  });
  const onAutofill = () => {
    // checking for autofill
    if (textBox.matches(":-webkit-autofill") || textBox.value.length > 0) {
      onFloating();
    }
  };
  const onFloating = () => {
    label.style.top = "-0.5rem";
    label.style.fontSize = "0.75rem";
    label.style.color = "rgb(29 78 216)";
  };
  const onStopFloating = () => {
    if (textBox.value.length) {
      return;
    }
    label.style.top = "1rem";
    label.style.fontSize = "1rem";
    label.style.color = "";
  };
</script>

<div class="relative">
  <label
    for={name}
    bind:this={label}
    class=" bg-white text-gray-500 rounded-sm px-1 ">{hint}</label
  >
  <input
    bind:this={textBox}
    {type}
    {name}
    class="border-1 p-4 rounded-md "
    on:focus={onFloating}
    on:focusout={onStopFloating}
    on:change={onAutofill}
  />
</div>

<style>
  label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
    transition: top 0.3s, font-size 0.3s;
  }
</style>
