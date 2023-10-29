<template>
  <div class="container">
    <div class="resume_block">
      <div class="resume_header">
        <div class="resume_header_container">
          <div class="resume_header_userInfo_block">
            <div class="resume_user_logo"></div>
            <div class="resume_user_info">
              <div class="resume_nameAgeCity_block">
                <div class="resume_nameTag">
                  <div class="resume_userName">{{ resume.userName }}</div>
                  <div class="resume_userTag">{{ resume.userTag }}</div>
                </div>
                <div v-if="resume.city === '' || resume.userGender === '' "></div>
                <div v-else class="resume_ageLocation">
                  <div class="resume_userAge">{{ resume.userGender }}, {{ resume.userAge }} лет</div>
                  <div class="resume_userLocation">Город: {{ resume.location }}</div>
                </div>
                <div class="resume_status">
<!--                  не готов к переезду-->
<!--                  не готов к командировкам <br>-->
                  {{ resume.status }}
                </div>
              </div>
              <div class="resume_user_contacts">
                <div class="resume_userEmail">{{ resume.userEmail }}</div>
                <div class="resume_userNumber">{{ resume.userNumber }}</div>
              </div>
            </div>
          </div>
<!--          <div class="resume_btnBlock">-->
<!--            <div class="btn">Скачать CV</div>-->
<!--          </div>-->
        </div>
        <div class="brand">itprofessionalswork</div>
      </div>
      <div class="resume_second_container">
        <div class="resume_description">
          <div class="resume_description_head">Резюме {{ resume.level }} {{ resume.direction }}</div>
          <div class="resume_description_content">
            {{ resume.description }}
          </div>
        </div>
        <div class="resume_userStack">
          <div class="resume_userStack_head">Стэк</div>
          <div class="resume_userStack_content">
            {{ resume.skills }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const {id} = useRoute().params
    const uri = 'https://api.itprofessionalswork.ru/resume/v1/' + id
    const resume = ref([])
    onMounted(async () => {
      try {
        const response = await axios.get(uri)
        resume.value = response.data
        // console.log("resume-data:",resume.value)
      } catch (e) {
        console.log(e)
      }
    })
    return {resume}
  }
})
</script>

<style scoped>
@import "assets/css/resumeID.css";
</style>