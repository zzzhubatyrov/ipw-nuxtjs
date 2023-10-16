<template>
  <div>
    <h1>Создание компании</h1>
    <form>
      <label for="company-name">Название компании:</label>
      <input type="text" id="company-name" v-model="companyName">

      <label for="company-description">Описание компании:</label>
      <textarea id="company-description" v-model="companyDescription"></textarea>

      <label for="company-location">Местоположение:</label>
      <input type="text" id="company-location" v-model="companyLocation">

      <label for="company-website">Веб-сайт:</label>
      <input type="text" id="company-website" v-model="companyWebsite">

      <label for="company-email">Email:</label>
      <input type="email" id="company-email" v-model="companyEmail">

      <label for="company-phone">Телефон:</label>
      <input type="tel" id="company-phone" v-model="companyPhone">

      <button @click="createCompany">Создать</button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent ({
  data() {
    return {
      companyName: '',
      companyDescription: '',
      companyLocation: '',
      companyWebsite: '',
      companyEmail: '',
      companyPhone: ''
    }
  },
  methods: {
    createCompany() {
      // код для создания компании на сервере
      alert("Компания успешно создана!");
    }
  }
})
</script>