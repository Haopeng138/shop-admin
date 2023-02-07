<template>
    <div>
        <el-row class="min-h-screen bg-indigo-500">
            <el-col :lg="16" class="flex items-center justify-center flex-col">
                <div>
                    <div class="text-left font-bold text-5xl text-light-200 mb-4"> Bienvenido </div>
                    <div class="text-gray-200 text-sm"> Esta es una pagina de practica </div>
                </div>
            </el-col>

            <el-col :lg="8" class="bg-light-50 flex items-center justify-center flex-col"> 
                <h2 class="font-bold text-3xl text-gray-800"> Bienvenido de vuelta </h2>
                <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                    <span >Acceso</span>
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                </div>
                <el-form :model="form" class="w-[250px]">
                    <el-form-item >
                        <el-input v-model="form.username" placeholder="Nombre de usuario" />
                    </el-form-item>
                    <el-form-item >
                        <el-input v-model="form.password" placeholder="Contraseña" />
                    </el-form-item>
                    <el-form-item>
                        <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onSubmit">Login</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username:"",
    password:""
})

const onSubmit = () => {
  console.log('submit!')
}
</script>