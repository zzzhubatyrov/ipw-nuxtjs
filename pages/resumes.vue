<template>
  <div class="container">
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
    <ResumeComponent />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import ResumeComponent from "~/components/ResumeComponent.vue"

defineComponent({
  components: {ResumeComponent}
})
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2.5rem;
}
</style>