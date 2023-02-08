import router from "~/router/index"
import { getToken } from "~/composables/auth"
import { toast } from "~/composables/util"
import store from "./store"

router.beforeEach(async (to, from, next) => {
    // to and from are both route objects. must call `next`.
    const token = getToken()

    // Not logged user 
    if (!token && to.path != "/login"){
        toast("Loguear primero","error")
        return next({
            path:"/login"
        })
    }

    // Avoid multiples login

    if (token && to.path == "/login"){
        toast("No intente loguear otra vez","error")
        return next ({
            path: from.path ? from.path : "/login"
        })
    }

    // if user is logged, save user info in vuex 
    if (token){
        await store.dispatch("getinfo")
    } 

    next()
})