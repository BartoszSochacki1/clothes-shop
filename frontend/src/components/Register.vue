<template>
    <div>
      <form @submit.prevent="register">
        <div>
          <label for="username">Nazwa użytkownika:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Hasło</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="Miejscowość">Miejscowość:</label>
          <input type="Miejscowość" id="Miejscowość" v-model="Miejscowość" required>
        </div>
        <div>
          <label for="Ulica">Ulica:</label>
          <input type="Ulica" id="Ulica" v-model="Ulica" required>
        </div>
        <div>
          <label for="Telefon">Telefon:</label>
          <input type="Telefon" id="Telefon" v-model="Telefon" required>
        </div>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  </template>
  
  <script>
  import { userService } from '../services/user.service.js';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: ''
      };
    },
    methods: {
      async register() {
        console.log(this.email);
        await userService.register(this.username, this.password, this.email);
        this.$router.push('/login');
  
      }
    }
  }
  </script>
  
  
  
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  
  .in-container{
      display: flex;
  }
  
  form {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    background-color: #f6f4d7;
  }
  
  input[type="text"],input[type="email"],
  input[type="password"],
  input[type="Miejscowość"],
  input[type="Ulica"],
  input[type="Telefon"] {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
  }
  
  button[type="submit"] {
      background-color: #000000;
      border-radius: 9px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 11px;
      color: white;
      flex: 1;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  
  label{
      color: black;
      display: flex;
      flex-gap: 30px;
      width: 100%;
  }
  </style>