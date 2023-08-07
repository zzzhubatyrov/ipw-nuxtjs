<template>
  <div>
    <div class="wrapper">
      <AppHeader />
      <div class="container">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent} from 'vue'
import AppHeader from "~/layouts/AppHeader.vue";
import ResumeComponent from "~/components/ResumeComponent.vue";
defineComponent({
  components: {AppHeader, ResumeComponent},
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(80vh - 10rem);
  margin: 20px 0;
  gap: 35px;
  color: #fff;
}
</style>