import { Message } from "element-ui";

// 是用用于处理axios的请求拦截插件

export default ({$axios} )=>{
//    请求头

// 错误拦截，onError用于错误拦截
    $axios.onError(res=>{
       // 返回的res是一个错误的对象，Error对象下都有一个response的属性可以访问错误的
    //     console.log(res.response,123)
    const {message,statusCode} = res.response.data;
    if(statusCode ===400){
        // Message = this.$message
        Message.error(message)
    }
    })
}