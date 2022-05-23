<template>
  <a href="/">{{ projectName }}</a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const projectName = computed(() => {
  return `Ариадна`;
})
</script>