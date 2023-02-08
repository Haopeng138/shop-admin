import { ElNotification } from "element-plus";

// Notification succes
export function toast(message,type="success",dangerouslyUseHTMLString=false){
    ElNotification({
        message: message,
        type: type,
        dangerouslyUseHTMLString:dangerouslyUseHTMLString,
        duration:3000
    })
}