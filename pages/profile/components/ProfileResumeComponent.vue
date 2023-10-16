<template>
  <div class="container">
    <div class="profile-resume_head">
      <div class="user-info">
        <div class="nameTag">
          <div class="name">{{profileResumeData.userName}}</div>
          <div class="tag">{{profileResumeData.userTag}}</div>
        </div>
        <div class="levelDirection">{{profileResumeData.level}} {{profileResumeData.direction}}</div>
        <div class="locationWorkTime">{{profileResumeData.location}} / {{profileResumeData.status}}</div>
        <div class="email">{{profileResumeData.userEmail}}</div>
      </div>
      <div class="salary">{{profileResumeData.salary}} на руки</div>
    </div>
    <div class="profile-resume-content">
      <div class="description">{{profileResumeData.description}}</div>
      <div class="skills">{{profileResumeData.skills}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {profileResumeData} = defineProps(["profileResumeData"])
// console.log(profileResumeData)
</script>

<style scoped>
.container {
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.50);
}
.profile-resume_head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
}
.nameTag {
  display: flex;
  align-items: center;
  gap: 10px;
}
.name {

}
.tag {

}
.levelDirection {
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
.locationWorkTime {
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
.email {

}
.salary {
  font-size: 20px;
  font-weight: 700;
}
.profile-resume-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}
.description {
  display: flex;
  //height: 100px;
  white-space: break-spaces;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}
.skills {
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
</style>