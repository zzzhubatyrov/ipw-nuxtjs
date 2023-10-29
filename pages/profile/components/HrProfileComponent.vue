<template>
  <div class="container">
    <div class="container-head">
      <div class="main-profile">
        <div class="user-photo"></div>
        <div class="user-dataBtn_block">
          <div class="user-info">
            <div class="user-nameEdit_block">
              <h2>Donkey Lover</h2>
              <button class="btn"><img src="../assets/img/editBtn.svg" alt="edit-btn"></button>
            </div>
            <div class="user-tagAgeGender_block">
              <div class="user-tag">@donkeylover</div>
              <div class="user-ageGender"></div>
            </div>
            <div class="user-locationStatus_block">
              <div class="user-location">Нефтекамск</div>
              <div class="user-status">не готов к переезду</div>
            </div>
            <div class="user-emailPhone_block">
              <div class="user-email">worker@gmail.com</div>
              <div class="user-phone"></div>
            </div>
          </div>
          <div class="btn-block">
            <button class="btn success send-message">Отправить сообщение</button>
            <button class="btn success download-cv">Скачать CV</button>
          </div>
        </div>
        <!--        <div class="user-social"></div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import "../assets/css/hr.css";
</style>