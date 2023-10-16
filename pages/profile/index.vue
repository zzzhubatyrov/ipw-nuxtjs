<template>
  <div class="profile_block">
    <div class="profile_block_left">
      <div class="profile_block_left_container">
        <div class="profile_photo"></div>
        <div class="profile_user_info">
          <div class="profile_user_info_secondBlock">
            <button class="btn editBtn" @click="openModal">Редактировать</button>
            <div class="profile_user_info_nameTag">
              <div class="user_name">{{ userData.name }}</div>
              <div class="user_tag">{{ userData.tag }}</div>
            </div>
            <div class="profile_user_info_ageLocation">
              <div class="user_age" v-if="userData.gender">{{ userData.gender }}, {{ Age }}</div>
              <div class="user_location">{{ userData.location }}</div>
            </div>
            <div class="profile_user_info_status">{{ userData.status }}</div>
          </div>
          <div class="profile_user_info_contacts">
            <div class="user_email">{{ userData.email }}</div>
            <div class="user_number">{{ userData.number }}</div>
          </div>
        </div>
        <div class="profile_btn_block">
          <button class="btn success disable">Скачать CV</button>
          <NuxtLink class="btn success" to="/employer">Работодателям</NuxtLink>
        </div>
      </div>
      <div class="profile_leftBlock_footer">
        <button class="btn logoutBtn" @click="logoutHandler">Выйти</button>
        <div class="brand">itprofessionalswork</div>
      </div>
    </div>
    <div class="profile_block_right">
      <div class="block about_me">
        <button class="btn editBtn_blockRight" @click="editMode = true" v-if="!editMode">Редактировать</button>
        <button class="btn saveBtn_blockRight" @click="saveDescription" v-if="editMode">Сохранить</button>
        <div class="about_me_header">Обо мне</div>
        <div class="about_me_content" v-if="!editMode">{{ userData.description }}</div>
        <div v-else><textarea v-model="newDescription"></textarea></div>
      </div>
<!--      <div class="block education">-->
<!--        <button class="btn editBtn_blockRight" @click="openModal">Редактировать</button>-->
<!--        <div class="education_header">Образование</div>-->
<!--        <div class="education_content"></div>-->
<!--      </div>-->
<!--      <div class="block experience">-->
<!--        <button class="btn editBtn_blockRight" @click="openModal">Редактировать</button>-->
<!--        <div class="experience_header">Опыт работы</div>-->
<!--        <div class="experience_content"></div>-->
<!--      </div>-->
      <div class="block resume">
        <NuxtLink class="btn editBtn_blockRight" to="/create-resume">Добавить резюме</NuxtLink>
        <div class="resume_header">Резюме</div>
        <div class="resume_content">
          <div class="resume_item" v-for="resumeItem in userDataResumes">
            <p>delete</p>
            <ProfileResumeComponent :profileResumeData="resumeItem" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="showModal">
    <UserDataComponent :closeModal="closeModal"/>
  </div>
</template>

<script setup lang="ts">
import Cookies from "js-cookie";
import axios from "axios";
import UserDataComponent from "~/components/UserDataComponent.vue";
import ProfileResumeComponent from "~/pages/profile/components/ProfileResumeComponent.vue";

const router = useRouter()
const showModal = ref(false)
const userData = ref([])
let Age = ref()
const userDataResumes = ref([])
const editMode = ref(false)
const newDescription = ref("")
let currentDate = new Date()

const saveDescription = async () => {
  try {
    const res = await axios.put('http://localhost:5000/data/v1/user/update', {
        description: newDescription.value,
      }, {
      withCredentials: true
    })
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5000/data/v1/user', {withCredentials: true})
    userData.value = res.data
    userDataResumes.value = res.data.resumes
    // console.log(userData.value)
    // console.log(userDataResumes.value)
    const date = userData.value.birthday.replace(/\./g, '-')
    const new_date = date.split('-').reverse().join('-')
    const birth = new Date(new_date)
    let age = currentDate.getFullYear() - birth.getFullYear()
    let monthDiff = currentDate.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birth.getDate())) {
      age--;
    }
    Age.value = age
    // console.log(res.data)
    if (!userData.value.gender) {
      showModal.value = true;
    }
    // || !userData.value.age || !userData.value.location || !userData.value.gender || !userData.value.number
  } catch (e) {
    console.log(e)
  }
})
const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}
const logoutHandler = async () => {
  try {
    await axios.post('http://localhost:5000/auth/v1/logout')
        .then(() => {
          Cookies.remove('ipwCookie', {expires: -1})
          window.location.reload()
        })
        .catch(e => console.log(e))
  } catch (e) {
    console.log(e)
  }
}
onMounted(() => {
  const isAuth = Cookies.get("ipwCookie")
  if (!isAuth) {
    router.push('/auth')
  }
})
defineComponent({
  UserDataComponent
})
</script>

<style scoped>
@import 'assets/css/profile.css';

.block {
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: #FFF;
  color: #000;
}

.modal_window {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}
.editBtn_blockRight, .saveBtn_blockRight {
  color: #000;
}
</style>