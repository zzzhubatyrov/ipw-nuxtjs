<template>
  <div :class="$style.vacancies_item_block">
    <div :class="$style.vacancies_item_header">
      <div :class="$style.vacancies_item_logo"></div>
      <div :class="$style.vacancies_item_vacanciesInfo">
        <div :class="$style.vacancies_item_vacanciesInfo_header">
          <div :class="$style.vacancies_item_name">{{ vacancy.companyName }}</div>
          <div :class="$style.vacancies_item_tag">{{ vacancy.companyTag }}</div>
        </div>
        <NuxtLink :to="`/vacancies/${vacancy.id}`" :class="$style.vacancies_item_levelDirection">{{ vacancy.level }} {{ vacancy.direction }}</NuxtLink>
        <div :class="$style.vacancies_item_location">{{ vacancy.location }} / {{ vacancy.workTime }}</div>
        <!-- <div class="vacancies_item_levelDirection"></div> ?? >> email -->
      </div>
    </div>
    <div :class="$style.vacancies_item_description">{{ vacancy.description }}</div>
    <div :class="$style.vacancies_item_skills">{{ vacancy.skills }}</div>
    <div :class="$style.vacancies_item_btnBlock">
      <button class="btn" :class="$style.send">Откликнуться</button>
      <button class="btn" :class="$style.success">Вы уже откликнулись</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { vacancy } = defineProps(['vacancy'])
</script>

<style module>
@import 'assets/css/vacancy.module.css';
</style>