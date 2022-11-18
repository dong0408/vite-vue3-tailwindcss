import request from "@/utils/axios";

// 登陆
interface IResponseType<p={}>{
    code?:number;
    status:number;
    msg:string;
    data:p;
}

interface ILogin{
    token:string;
    expires:number;
}
export const login=(username:string,password:string)=>{
    return request<IResponseType<ILogin>>({
        url:'/api/auth/login',
        method:'post',
        data:{
            username,
            password,
        }
    })
}