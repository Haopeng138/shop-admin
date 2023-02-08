import { useCookies } from "@vueuse/integrations/useCookies";

const TokenKey = "admin-token"
const cookie = useCookies()

// get token
export function getToken(){
    return cookie.get(TokenKey)
}

export function setToken(token){
    return cookie.set(TokenKey,token)
}
export function removeToken(){
    return cookie.remove(TokenKey)
}

// remove token 