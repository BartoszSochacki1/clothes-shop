<script setup>
import { useCartStore } from "../stores/cart";
import Button from "./Button.vue";
import {useIsAuthenticated} from '../useAuth.js'
const cartStore = useCartStore();
const {isAuthenticated, toggle} = useIsAuthenticated();
</script>
<template>
  <div v-if="isAuthenticated" style="position: relative">
        <router-link :to="{ name: 'cart' }">
            <Button>
                <template #body>
                    <img alt="logo" class="logo" src="@/assets/basket.png" width="20" height="20" />
                </template>
            </Button>
        </router-link>
        <p class="cart-badge">{{ cartStore.itemsInCart }}</p>
    </div>
</template>
<style scoped>
.cart-badge {
    background-color: red;
    color: white;
    position: absolute;
    right: -10px;
    bottom: -10px;
    border-radius: 90px;
    width: 20px;
    text-align: center;
}
</style>
