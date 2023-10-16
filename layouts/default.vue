<template>
  <header class="header">
    <div class="header-logoNotify_block">
      <div class="header_logo"><NuxtLink to="/">IPW</NuxtLink></div>
      <button class="header_notification" @click="openModal">notify</button>
    </div>
    <nav class="navbar">
      <div v-if="route.path != '/' && route.path != '/profile'">
        <NuxtLink class="btn" to="/profile">Профиль</NuxtLink>
      </div>
      <NuxtLink to="/messenger">Чат</NuxtLink>
      <NuxtLink to="/resumes">Резюме</NuxtLink>
      <NuxtLink to="/vacancies">Вакансии</NuxtLink>
      <NuxtLink :class="{'disable':isActive}" v-if="isActive" :to="isActive ? '/' : '/about'">О нас</NuxtLink>
    </nav>
  </header>
  <div class="modal" v-if="showModal">
    <NotifyModalComponent :closeModal="closeModal"/>
  </div>
  <slot />
</template>

<script setup lang="ts">
import {defineComponent} from "vue";
import NotifyModalComponent from "/components/NotifyModalComponent.vue"
import ResumeComponent from "~/components/ResumeComponent.vue";
import VacancyComponent from "~/components/VacancyComponent.vue";

defineComponent({
  components: {
    NotifyModalComponent,
  },
})

let isActive = ref(true)

const route = useRoute()
console.log(route.path)

let showModal = ref(false)
const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
.header-logoNotify_block {
  display: flex;
  align-items: center;
  gap: 20px;
}
.btn {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color:#fff;

  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  background-color: #325181;
  border-radius: 12px;
}
</style>