import { createStore } from "vuex";
import {login,getinfo}  from '~/api/manager'
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
    },
    actions:{
        // get current user info 
        getinfo({commit}){
            return new Promise((resolve,reject)=>{
                getinfo().then(res=>{
                    commit("SET_USERINFO",res)
                    resolve(res)
                }).catch(err=>reject(err))
            })

        }
    }
})

export default store