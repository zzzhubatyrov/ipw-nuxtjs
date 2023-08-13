<template>
  <div>
    <div class="wrapper">
      <NuxtLayout>
          <div class="container">
              <NuxtPage />
          </div>
      </NuxtLayout>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ResumeComponent from "~/components/ResumeComponent.vue";
import VacanciesComponent from "~/components/VacanciesComponent.vue";
export default defineComponent({
  components: {
    ResumeComponent,
    VacanciesComponent
  },
  head() {
      definePageMeta({
          layout: 'default'
      })
  },
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