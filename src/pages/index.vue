<template>
    <div>
        后台
        <el-button @click="set">set</el-button>
        <el-button @click="get">get</el-button>
        <el-button @click="remove">remove</el-button>
    </div>
</template>

<script setup>
    import {useCookies} from'@vueuse/integrations/useCookies'
    const cookie = useCookies()
    function set(){
        cookie.set("admin-token","123")
    }
    function get(){
        
        console.log(cookie.get("admin-token"))
    }
    function remove(){
        cookie.remove("admin-token")
    }
</script>