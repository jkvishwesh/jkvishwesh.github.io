<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  },
  style: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div :class="['divider', className]" :style="style"></div>
</template>

<style scoped>
.divider {
  border-top: 1px solid #ccc;
  margin: 1rem 0;
  width: 100%;
}
</style>
