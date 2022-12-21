// 用户相关的接口请求函数都在这
import {request} from '@/utils/request'
import type {User} from '@/types/user'

export const loginByPassword=(mobile:string,password:string)=>
request <User>('login/password','POST',{mobile,password})