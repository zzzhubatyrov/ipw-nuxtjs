<template>
  <div class="container">
    <div class="container-head">
      <div class="main-profile">
        <img class="user-photo" alt="user-photo" :src="`data:image/jpeg;base64,${userData.photo}`" v-if="userData.photo != null">
        <button class="btn user-photo" @click="openUploadModal" v-else><img src="./assets/img/camera.svg" alt="add-photo"></button>
        <div class="user-dataBtn_block">
          <div class="user-info">
            <div class="user-nameEdit_block">
              <h2 class="user-name">Donkey Lover</h2>
              <button class="btn" @click="openModal"><img src="./assets/img/editBtnWhite.svg" alt="edit-btn"></button>
            </div>
            <div class="user-tagAgeGender_block">
              <div class="user-tag"><img src="./assets/img/tag.svg" alt="tag">donkeylover</div>
              <div class="user-ageGender">Мужчина, 20</div>
            </div>
            <div class="user-locationStatus_block">
              <div class="user-location"><img src="./assets/img/location.svg" alt="location">Нефтекамск</div>
              <div class="user-status">не готов к переезду</div>
            </div>
            <div class="user-emailPhone_block">
              <div class="user-email">worker@gmail.com</div>
              <div class="user-phone"></div>
            </div>
          </div>
          <div class="btn-block">
            <NuxtLink class="btn employee" to="/employer">Работодателям</NuxtLink>
            <button class="btn download-cv disable">Скачать CV</button>
          </div>
        </div>
        <!--        <div class="user-social"></div>-->
      </div>
    </div>
    <div class="container-content">
      <div class="about-me_block">
        <div class="about-me_head">
          <h2>Обо мне</h2>
          <button class="btn"><img src="./assets/img/editBtn.svg" alt="edit-btn"></button>
        </div>
        <div class="about-me_content"></div>
      </div>
      <div class="second-content_block">
        <div class="education-block">
          <div class="education-head">
            <h2>Образование</h2>
            <button class="btn"><img src="./assets/img/editBtn.svg" alt="edit-btn"></button>
          </div>
          <div class="education-content"></div>
        </div>
        <div class="experience-block">
          <div class="experience-head">
            <h2>Опыт работы</h2>
            <button class="btn"><img src="./assets/img/editBtn.svg" alt="edit-btn"></button>
          </div>
          <div class="experience-content"></div>
        </div>
      </div>
      <div class="resume-block">
        <div class="resume-header">
          <h2>Резюме</h2>
          <NuxtLink class="btn" to="/create-resume">
            <img src="./assets/img/editBtn.svg" alt="add-resume">
          </NuxtLink>
        </div>
        <div class="resume-content">
          <div class="resume-item" v-for="resumeItem in userDataResumes">
            <p>delete</p>
            <ProfileResumeComponent :profileResumeData="resumeItem" />
          </div>
        </div>
      </div>
      <div class="stack-block">
        <div class="stack-head">
          <h2>Стэк</h2>
          <button class="btn"><img src="./assets/img/editBtn.svg" alt="edit-btn"></button>
        </div>
        <div class="stack-content"></div>
      </div>
    </div>
  </div>
  <div class="modal" v-if="showModal">
    <UserDataComponent :closeModal="closeModal"/>
  </div>
  <div class="modal" v-if="uploadModal">
    <UploadPhotoComponent :closeUploadModal="closeUploadModal" />
  </div>
</template>

<script setup lang="ts">
import UserDataComponent from "~/components/UserDataComponent.vue";
import HrProfileComponent from "~/pages/profile/components/HrProfileComponent.vue";
import ProfileResumeComponent from "~/pages/profile/components/ProfileResumeComponent.vue";
import UploadPhotoComponent from "~/pages/profile/components/UploadPhotoComponent.vue";
import {ref} from "vue";
import axios from "axios";
import Cookies from "js-cookie";

const router = useRouter()
const userData = ref([])
const companyData = ref([])
let Age = ref()
const userDataResumes = ref([])
const newDescription = ref("")
let currentDate = new Date()
let userRole = ref('')

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
    const date = userData.value.birthday.replace(/\./g, '-')
    const new_date = date.split('-').reverse().join('-')
    const birth = new Date(new_date)
    let age = currentDate.getFullYear() - birth.getFullYear()
    let monthDiff = currentDate.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birth.getDate())) {
      age--;
    }
    Age.value = age
    userRole.value = userData.value.role.role_name
    console.log(userRole.value)
    console.log(res.data)
    if (!userData.value.gender) {
      showModal.value = true;
    }
    // || !userData.value.age || !userData.value.location || !userData.value.gender || !userData.value.number
  } catch (e) {
    console.log(e)
  }
})

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:5000/data/v1/user', {withCredentials: true})
    companyData.value = res.data.company
    console.log(companyData.value)
  } catch (e) {
    console.log(e)
  }
})
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
  UserDataComponent,
  HrProfileComponent,
  ProfileResumeComponent,
  UploadPhotoComponent
})

const showModal = ref(false)
const uploadModal = ref(false)
const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}

const openUploadModal = () => {
  uploadModal.value = true
}
const closeUploadModal = () => {
  uploadModal.value = false
}

</script>

<style scoped>
@import 'assets/css/profile.css';

h1, h2, h3, h4, p {
  margin: 0;
  padding: 0;
}
</style>