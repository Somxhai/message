<script lang="ts">
  import {
    getBgColorByProperty,
    getTextColorByProperty,
    getTextByProperty,
  } from "$lib/utils/properties";
  export let propertiesKey: string;
  export let className: string;
  export { className as class };
  let bgColor = getBgColorByProperty(propertiesKey);
  let textColor = getTextColorByProperty(propertiesKey);
</script>

<div
  class="{bgColor} {textColor} text-xs md:text-sm  text-white px-1 md:px-2 py-1 rounded-md select-none {className}"
>
  {getTextByProperty(propertiesKey)}
</div>
