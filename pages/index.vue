<template>
  <div class="container">
    <div class="centName">Здесь вы сможете создать своё Резюме!</div>
    <div class="name">IT Professionals Work</div>
    <nuxt-link class="btn" :to="linkToProfileOrAuth">{{ linkText }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Cookies from 'js-cookie'
export default defineComponent({
  computed: {
    linkToProfileOrAuth() {
      const isAuthenticated = Cookies.get("ipw_cookie");
      return isAuthenticated ? "/profile" : "/auth";
    },
    linkText() {
      return Cookies.get("ipw_cookie") ? "Регистрация / Авторизация" : "Профиль";
    }
  }
})
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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