<template>
  <div :class="$style.resume_item_block">
    <div :class="$style.resume_item_header">
      <div :class="$style.resume_item_logo"></div>
      <div :class="$style.resume_item_userInfo">
        <div :class="$style.resume_item_userInfo_header">
          <div :class="$style.resume_item_name">Zhubatyrov Rodion</div>
          <div :class="$style.resume_item_tag">@zzzhubatyrov</div>
        </div>
        <div :class="$style.resume_item_levelDirection">Middle Golang Developer</div>
        <div :class="$style.resume_item_location">Ufa / Full Day</div>
        <div :class="$style.resume_item_userEmail">whqhub@bk.ru</div>
      </div>
    </div>
    <div :class="$style.resume_item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ad distinctio fugiat ipsam nihil odio officiis possimus qui repudiandae vero.
      Soluta.</div>
    <div :class="$style.resume_item_btnBlock">
      <button class="btn" :class="$style.btnWrite">Написать</button>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style module>
@import '@/assets/css/resume.module.css';
</style>