<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <h2>Page Not Found!</h2>
    <p>{{error.message}}</p>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, defineProps} from 'vue'
defineProps(['error'])
defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>