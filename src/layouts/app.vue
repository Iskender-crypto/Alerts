<template>
  <div class="gradient-container">
    <div class="circle-1"></div>
    <div class="circle-2"></div>
  </div>
  <div class="app">
    <nav class="flex justify-content-between align-items-center">
      <h2 class="logo">Uptify</h2>
      <div class="burger-ellipse">
        <div class="burger">
          <div class="burger-item"></div>
          <div class="burger-item"></div>
        </div>
      </div>
    </nav>
    <slot></slot>
  </div>

</template>
<script setup lang="ts">
</script>