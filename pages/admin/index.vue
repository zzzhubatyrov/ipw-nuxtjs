<template>
  <div class="container">
    <div class="container-head">
      <div class="profile-container">
        <div class="photo"></div>
        <div class="info-block">
          <div class="info-block_content">
            <div class="nameTag-block">
              <div class="name">Rodion Zhubatyrov</div>
              <div class="tag">@zhubatyrov</div>
            </div>
            <div class="ageLocation-block">
              <div class="age">Мужчина, 17</div>
              <div class="location">Город: Нефтекамск</div>
            </div>
          </div>
          <div class="contacts-block">
            <div class="email">whqhub@bk.ru</div>
            <div class="phoneNumber">+7(999)999-99-99</div>
          </div>
          <div class="role">admin</div>
        </div>
      </div>
      <p class="brand">itprofessionalswork</p>
    </div>
    <div class="container-content">
      <div class="content-head">
        <div class="btn blue-btn users-btn" @click="changeContent('users')">Пользователи</div>
        <div class="btn blue-btn resume-btn" @click="changeContent('resume')">Резюме</div>
        <div class="btn blue-btn companies-btn" @click="changeContent('companies')">Компании</div>
        <div class="btn blue-btn vacancies-btn" @click="changeContent('vacancies')">Вакансии</div>
      </div>
      <div class="content">
        <div v-if="activeContent === 'users'">Users Content</div>
        <div v-if="activeContent === 'resume'">
          <p>Resumes Content</p>
        </div>
        <div v-if="activeContent === 'companies'">Companies Content</div>
        <div v-if="activeContent === 'vacancies'">Vacancies Content</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import axios from "axios";
import Cookies from "js-cookie";
const activeContent = ref('users')
const router = useRouter()
const changeContent = (type: string) => {
  activeContent.value = type
}
const resumes = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/resume/v1/resumes");
    resumes.value = response.data;
    console.log(resumes.value)
  } catch (error) {
    console.error(error);
  }
});

onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:5000/data/v1/user", {withCredentials: true})
    let error = {
      "message": "Вы не являетесь Администратором или Модератором!",
      "code": 404,
      "description": "Отказано в доступе"
    }
    if (res.data.role.role_name != "Администратор" || res.data.role.role_name != "Модератор") {
      await router.push('/profile')
      console.log(JSON.stringify(error))
    }
  } catch (e) {
    console.log(e)
  }
})
// onMounted(() => {
//   const isAuth = Cookies.get("ipwCookie")
//   if (!isAuth) {
//     router.push('/profile')
//   }
// })
</script>

<style scoped>
@import "./assets/css/style.css";
</style>