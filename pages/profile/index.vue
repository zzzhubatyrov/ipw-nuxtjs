<template>
  <div class="profile_block">
    <div class="profile_block_left">
      <div class="profile_block_left_container">
        <div class="profile_photo"></div>
        <div class="profile_user_info">
          <div class="profile_user_info_secondBlock">
            <div class="profile_user_info_nameTag">
              <div class="user_name">Rodion Zhubatyrov</div>
              <div class="user_tag">@zhubatyrov</div>
            </div>
            <div class="profile_user_info_ageLocation">
              <div class="user_age">17</div>
              <div class="user_location">Neftekamsk</div>
            </div>
            <div class="profile_user_info_status">Looking for offers</div>
          </div>
          <div class="profile_user_info_contacts">
            <div class="user_email">whqhub@bk.ru</div>
            <div class="user_number">+7(999)-999-99-99</div>
          </div>
        </div>
        <div class="profile_btn_block">
          <button class="btn">Скачать CV</button>
          <button class="btn">Работодателям</button>
        </div>
      </div>
      <div class="brand">itprofessionalswork</div>
    </div>
    <div class="profile_block_right">
      <div class="block about_me">
        <div class="about_me_header">Обо мне</div>
        <div class="about_me_content"></div>
      </div>
      <div class="block education">
        <div class="education_header">Образование</div>
        <div class="education_content"></div>
      </div>
      <div class="block experience">
        <div class="experience_header">Опыт работы</div>
        <div class="experience_content"></div>
      </div>
      <div class="block resume">
        <div class="resume_header">Резюме</div>
        <div class="resume_content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Cookies from 'js-cookie'
export default defineComponent({
  created() {
    if (Cookies.get('ipw_cookie')) {
      this.$router.push('/auth')
    }

  }
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
</style>