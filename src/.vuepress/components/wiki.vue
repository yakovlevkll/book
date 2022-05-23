<template>
  <a :href="wikiLink" target="_blank" rel="noopener noreferrer" class="external-link">
    <slot></slot>
  </a>
</template>


<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({link: { type: String, required: true }})

const wikiLink = computed(() => {
  const l = props.link.replace(/\s/gi, "_");
  return `https://ru.wikipedia.org/wiki/${l}`;
})
</script>
