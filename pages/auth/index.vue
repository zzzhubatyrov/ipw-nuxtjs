<template>
  <form class="authForm" v-if="isLogin" @submit.prevent="login">
    <h1>Авторизация <span>/</span> Регистрация</h1>
      <input type="email" v-model="email" placeholder="Почта" required>
      <input type="password" v-model="password" placeholder="Пароль" required>
    <button class="btn" type="submit">Войти</button>
    <p>Нет аккаунта? <button class="btn" @click="switchForm">Зарегистрироваться</button></p>
  </form>

  <!-- Форма регистрации -->
  <form class="authForm" v-else @submit.prevent="register">
    <h1>Авторизация <span>/</span> Регистрация</h1>
      <input type="text" v-model="name" placeholder="Имя / фамилия" required>
      <input type="email" v-model="email" placeholder="E-mail" required>
      <input type="password" v-model="password" placeholder="Пароль" required>
      <input type="password" v-model="repeatPassword" placeholder="Повторите пароль" required>
    <button class="btn" type="submit">Зарегистрироваться</button>
    <p>Уже есть аккаунт? <button class="btn" @click="switchForm">Войти</button></p>
  </form>
</template>

<script lang="ts">
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      isLogin: true,
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/auth/v1/login', {
          email: this.email,
          password: this.password
        }, {
          withCredentials: true
        })
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
    async register() {
      const response = await axios.post('http://localhost:5000/auth/v1/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        repeatPassword: this.password,
      })
      console.log(response)
    },
    switchForm() {
      this.isLogin = !this.isLogin;
    }
  },
})
</script>

<style scoped>
* {
  color: #000;
  //text-align: center;
  font-family: Inter, sans-serif;
  font-style: normal;
  line-height: normal;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
}

.authForm {
  display: flex;
  padding: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  background: #FFF;
}
input {
  display: flex;
  width: 320px;
  padding: 15px 10px;
  align-items: center;
  border-radius: 15px;
  border: .8px solid rgba(0, 0, 0, 0.60);
  background: rgba(230, 230, 227, 0.40);
}
input::placeholder {
  color: rgba(0, 0, 0, 0.50);
  font-size: 12px;
  font-weight: 500;
}
</style>