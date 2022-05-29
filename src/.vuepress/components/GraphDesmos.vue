<template>
  <div class="desmos-container">
    <iframe
      :src="`https://www.desmos.com/calculator/${link}?embed`"
      frameborder="0"
      class="desmos-frame"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({link: { type: String, required: true }})
</script>
