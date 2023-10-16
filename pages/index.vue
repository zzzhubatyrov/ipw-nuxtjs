<template>
  <div class="container">
    <div class="centName">Здесь вы сможете создать своё Резюме!</div>
    <div class="name">IT Professionals Work</div>
    <NuxtLink class="btn" :to="linkToProfileOrAuth">{{ linkText }}</NuxtLink>
  </div>
  <div class="modal_window-notice" v-if="showNotice">
    <NoticeComponent :closeModal="closeNotice"/>
  </div>
</template>

<script lang="ts">
import Cookies from 'js-cookie'
import {ref, defineComponent} from "vue";
import UserDataComponent from "@/components/UserDataComponent.vue";
import NoticeComponent from "~/components/NoticeComponent.vue";

export default defineComponent({
  UserDataComponent,
  NoticeComponent,
  setup() {
    const showNotice = ref(true)
    const closeNotice = () => {
      showNotice.value = false
    }
    const checkVisited = () => {
      const visited = localStorage.getItem("visited")
      if (visited) {
        showNotice.value = false
      } else {
        showNotice.value = true
        localStorage.setItem("visited", "true")
      }
    }
    onMounted(() => {
      checkVisited()
    })
    return {
      showNotice,
      closeNotice
    }
  },
  computed: {
    linkToProfileOrAuth() {
      const isAuth = Cookies.get("ipwCookie")
      return isAuth ? "/profile" : "/auth";
    },
    linkText() {
      const isAuth = Cookies.get("ipwCookie")
      return isAuth ? "Профиль" : "Регистрация / Авторизация"
    }

  }
})
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 100%;
  margin: 250px 0;
}
.centName {
  color: #FFF;
  font-family: Raleway, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.name {
  font-size: 64px;
}
.btn {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 18px;
  padding: 16px 84px;
  color:#fff;

  background-color: #325181;
  border-radius: 12px;
}
</style>