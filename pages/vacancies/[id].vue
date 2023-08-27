<template>
  <div class="container">
    <div class="vacancy_header">
      <div class="vacancy_info_block">
        <div class="vacancyNameLocation_block">
          <h2 class="vacancy_name">{{ vacancy.level }} {{ vacancy.direction }}</h2>
          <h4 class="vacancy_salary">до 100 000 Р на руки</h4>
          <h4 class="vacancy_experience">Требуемый опыт работы: 1-3 года</h4>
          <h4 class="vacancy_workTime">{{ vacancy.workTime }}</h4>
        </div>
        <div class="skills_block">
          <h2 class="skills_block_head">Ключевые навыки</h2>
          <div class="skills_item_block">
            <div class="skill_item" v-for="skill_item in skills">
              {{ skill_item }}
            </div>
          </div>
        </div>
        <div class="companyNameTagLogo_block">
          <div class="companyNameTag_block">
            <h2 class="companyName">{{ vacancy.companyName }} <span>{{ vacancy.companyTag }}</span></h2>
            <h3 class="companyLocation">{{ vacancy.location }}</h3>
          </div>
          <div class="vacancy_logo"></div>
        </div>
      </div>
      <div class="vacancy_btnBlock"></div>
    </div>
    <div class="vacancy_descriptionBlock">
      <h2 class="vacancy_descriptionBlock_head">О компании:</h2>
      <div class="vacancy_descriptionBlock_content">
        {{ vacancy.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const { id } = useRoute().params
    const uri = 'http://localhost:5000/vacancy/v1/' + id
    const vacancy = ref([]);
    const skills = ref([])
    onMounted(async () => {
      try {
        const response = await axios.get(uri);
        vacancy.value = response.data;
        skills.value = vacancy.value.skills.split(" ")
        console.log(vacancy.value)
        console.log(skills.value)
      } catch (error) {
        console.error(error);
      }
    });
    return {
      vacancy,
      skills,
    };
  }
});
</script>

<style scoped>
@import "assets/css/vacancyPage.css";
h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
}
</style>