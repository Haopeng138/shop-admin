import { ElNotification } from "element-plus";

// Notification succes
export function toast(message,type="success",dangerouslyUseHTMLString=false){
    ElNotification({
        message: "Logueado",
        type: 'success',
        dangerouslyUseHTMLString:dangerouslyUseHTMLString,
        duration:3000
    })
}