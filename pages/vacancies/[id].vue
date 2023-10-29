<template>
  <div class="container">
    <div class="container-head">
      <div class="company">
        <img class="logo" :src="`data:image/jpeg;base64,${companyData.photo}`" alt="logo" />
        <div class="company-data">
          <div class="name">{{ companyData["name"] }}</div>
          <div class="location">{{ companyData["location"] }}</div>
          <div class="company-btn_block">
            <NuxtLink class="btn about-company_btn" :to="`/company/${companyID}`">Подробнее</NuxtLink>
          </div>
        </div>
      </div>
      <div class="main-vacancy">
        <div class="skills-block">
          <div class="skills-head">Ключевые навыки</div>
          <div class="skills-content">
            <div class="skill-item" v-for="skill in skills">
              {{ skill }}
            </div>
          </div>
        </div>
        <div class="vacancy-info">
          <div class="vacancy-data">
            <div class="vacancy-titleSalary_block">
              <div class="vacancy-title">{{ vacancy["level"] }} {{ vacancy["direction"] }}</div>
              <div class="vacancy-salary">до {{ vacancy["salary"] }} ₽ на руки</div>
            </div>
            <div class="employment-exp_block">
              <div class="vacancy-description-item">Требуемый опыт: <span>{{ vacancy["experience"] }}</span></div>
              <div class="vacancy-description-item">{{ vacancy["workTime"] }}</div>
            </div>
          </div>
          <button class="btn success req-btn">Откликнуться</button>
        </div>
      </div>
    </div>
    <div class="container-content">
      <div class="about-company_block">
        <h2 class="about-company_head">О компании</h2>
        <div class="about-company_content">
          {{ vacancy["description"] }}
        </div>
      </div>
<!--      <div class="company-vacancies_block">-->
<!--        <h2 class="company-vacancies_head">Больше вакансий этой компании</h2>-->
<!--        <div class="company-vacancies_content"></div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import axios from "axios";
import {SymbolKind} from "vscode-languageserver-types";
import Number = SymbolKind.Number;
export default defineComponent({
  setup() {
    const { id } = useRoute().params
    const vacancy = ref([]);
    const skills = ref([]);
    const companyData = ref([]);
    const companyID = ref();
    onMounted(async () => {
      try {
        const response = await axios.get(`https://api.itprofessionalswork.ru/vacancy/v1/${id}`);
        vacancy.value = response.data;
        skills.value = vacancy.value.skills.split(" ");
        companyID.value = response.data["companyID"];

        const comp_res = await axios.get(`https://api.itprofessionalswork.ru/company/v1/${companyID.value}`);
        companyData.value = comp_res.data;
      } catch (error) {
        console.error(error);
      }
    });
    return {
      companyData,
      vacancy,
      skills,
      companyID,
    };
  }
});
</script>

<style scoped>
@import "./assets/css/vacancies-[id].css";
* {
  font-family: Inter, sans-serif;
}
h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
}
</style>