import service from "~/axios";

export function login(username,password){
    return service.post("/admin/login",{username,password})
}

export function getinfo(){
    return service.post("/admin/getinfo")
}