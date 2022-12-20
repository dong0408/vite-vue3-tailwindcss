import { AccessToken, LangKey, ResponseCode } from '../config'

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Message } from "element-plus";
import { resolve } from "path";

const baseURL = process.env.VITE_APP_BASE_API


// Request interceptors
const createService = (option: any) => {
    const service = axios.create({baseURL})
    service.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            if (option) {
                config = { ...config, ...option }
            }
            return config;
        },
        (error: any) => {
            Promise.reject(error)
        }
    );
    // Response interceptors
    service.interceptors.response.use(
        // async
        (response: AxiosResponse) => {
            console.log(response);
            return response
        },
        (error: any) => {
            return Promise.reject(error)
        }
    )
    return service
}

//创建axios参数对象
const createConfig = (config: any, data: Object) => {
    const { method = 'GET', url, ...resetConfig } = config
    const key = method.toUpperCase() === 'post' ? 'data' : 'params'
    const _ = {
        method,
        url,
        ...resetConfig,
    }
    _[key] = data
    return _

}

const service = createService(Option)

export default function request(config: any, data: Object) {
    const { muted = false } = config
    const option = createConfig(config, data)
    // const {$store}
    return new Promise((resolve, rejects) => {
        const defaultMsg = '出错了'
        service(option).then(response => {
            const { code, msg = defaultMsg } = response.data
            if (code !== ResponseCode.OK) {

                if (code === ResponseCode.TOKEN_INVALID) {
                 if($store){
                    $store.dispatch('logout')
                 }
                }
                if(!muted){
                    $message.warning(msg)
                }
                rejects(response)
                return 
            }
            resolve(response)
        }).catch(error =>{
            if(!muted){
                $message.warning(defaultMsg)
            }
            reject(error)

        })
    })
}




