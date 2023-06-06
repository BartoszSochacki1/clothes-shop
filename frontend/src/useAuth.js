import {ref, readonly} from "vue"

const isAuthenticated = ref(false);
export const useIsAuthenticated = ()=>{
    const toggle = ()=>{
        isAuthenticated.value = !isAuthenticated.value;
    }

    return {isAuthenticated, toggle};
}