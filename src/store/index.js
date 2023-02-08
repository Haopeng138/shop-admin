import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            // user data
            user: {

            }
        }
    },
    mutations:{
        // save user info 
        SET_USERINFO(state,user){
            state.user = user
        }
    }
})

export default store