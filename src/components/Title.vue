

<template>
  <h2 class="title mt-6 md:mt-8 mb-6 md:pb-8">
    {{title}}
  </h2>
</template>
<script setup lang="ts">
defineProps({
  title: String
})
</script>