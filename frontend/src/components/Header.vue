<script setup>
import Logo from "./Logo.vue";
import SearchInput from "./SearchInput.vue";
import CartButton from "./CartButton.vue"
import Button from "./Button.vue"
import { ref } from "vue";
import {userService} from "../services/user.service.js"
import {useIsAuthenticated} from '../useAuth.js'
const {isAuthenticated} = useIsAuthenticated();
</script>


<template>
    <div class="header">
        <Logo></Logo>
        <div class="container">
            <div>
                <SearchInput></SearchInput>
            </div>
            <CartButton />
            <Button v-if="!isAuthenticated" @click="navigateToLogin()">            
                <template #body>
                    <p>ZALOGUJ</p>
                </template>
            </Button>
            <Button v-if="isAuthenticated" @click="logoutRedirect()">            
                <template #body> 
                    <p>WYLOGUJ</p>
                </template>
            </Button>
            <Button v-if="!isAuthenticated" @click="navigateToRegister()">            
                <template #body>
                    <p>ZAREJESTRUJ</p>
                </template>
            </Button>
        </div>
    </div>
</template>
<style scoped>
.header {
    background-color: #f6f4d7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
}

.container {
    display: flex;
    align-items: center;
}

.container:first-child {
    margin-right: 20px;
}
</style>

<script>
export default {
    methods: {
        navigateToLogin() {
            this.$router.push('/login');
        },
        navigateToRegister() {
            this.$router.push('/register');
        },
        logoutRedirect(){
            userService.logout();
            this.$router.push('/all');
        }
    }
};
</script>
