<template>
    <div>
        <el-row class="login-container">
            <el-col :lg="16" class="left">
                <div>
                    <div > Bienvenido </div>
                    <div > Esta es una pagina de practica </div>
                </div>
            </el-col>

            <el-col :lg="8" class="right"> 
                <h2 class="title"> Bienvenido de vuelta </h2>
                <div>
                    <span class="line"></span>
                    <span >Acceso</span>
                    <span class="line"></span>
                </div>
                <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                    <el-form-item prop="username">
                        <el-input v-model="form.username" placeholder="Nombre de usuario">
                            <template #prefix>
                                <el-icon class="el-input__icon"><User></User></el-icon>        
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="form.password" placeholder="Contraseña" show-password> 
                            <template #prefix>
                                <el-icon class="el-input__icon"><Lock></Lock></el-icon>        
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button round color="#626aef" class="w-[250px]" 
                        type="primary" @click="onSubmit" :loading="loading">Login</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { reactive,ref,onMounted,onBeforeUnmount} from 'vue'
import { toast } from "~/composables/util";
import { useRouter } from 'vue-router';
import {useStore } from 'vuex'

const store = useStore()
const router = useRouter()
// do not use same name with ref
const form = reactive({
    username:"",
    password:""
})

// Form rules
const rules = {
    username:[
        { required: true, message: 'No puedes dejarlo vacio', trigger: 'blur' },
    ],
    password:[
        { required: true, message: 'No puedes dejarlo vacio', trigger: 'blur' },
    ]
}

const formRef = ref(null)
const loading = ref(false)
const onSubmit = () => {
    formRef.value.validate((valid)=>{
        if (!valid){
            return false
        }
        loading.value = true
        store.dispatch("login",form).then(res=>{
            toast("Logueado")
            router.push("/")
        }).finally(()=>{
            loading.value = false
        })        
    })
}


// 

// keyevent 

function onKeyUp(e){
    if (e.key == "Enter") onSubmit()
}

onMounted(()=>{
    document.addEventListener("keyup",onKeyUp);
})

// Remove "enter" key event listener
onBeforeUnmount(()=>{
    document.removeEventListener("keyup")
})
</script>

<style scoped>
.login-container{
    @apply min-h-screen bg-indigo-500;
}

.login-container .left, .login-container .right{
    @apply flex items-center justify-center flex-col;
}

.login-container .right{
    @apply bg-light-50  flex-col;
}

.left>div>div:first-child{
    @apply text-left font-bold text-5xl text-light-200 mb-4;
}

.left>div>div:last-child{
    @apply text-gray-200 text-sm;
}

.right .title {
    @apply font-bold text-3xl text-gray-800;
}

.right>div{
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}

.right .line{
    @apply h-[1px] w-16 bg-gray-200;
}
</style>