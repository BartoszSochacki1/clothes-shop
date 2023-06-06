<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div>
        <label for="username">Login:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Hasło:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Zaloguj</button>
    </form>
  </div>
</template>

<script>
import { userService } from '../services/user.service.js';
import { inject } from 'vue';
import {useIsAuthenticated} from '../useAuth.js'


const {isAuthenticated, toggle} = useIsAuthenticated();
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
    const result = await userService.login(this.username, this.password);
    if(result)
      this.$router.push('/all');
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

input[type="text"],
input[type="password"] {
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
