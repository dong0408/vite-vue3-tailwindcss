import router from "@/router";
import store from "@/store/idnex";
import axios, {AxiosRequestConfig,AxiosResponse} from "axios";

const baseURL=process.env.BASE_URL
console.log(baseURL,'SDCD');

const service =axios.create({
    baseURL,
    timeout:5000,
})

 // Request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig)=>{
        // let {token}=
        // if(token){
        //     config.headers.Authorization=`Bearer ${token}`
        // }
      return config;
    },
    (error:any)=>{
        Promise.reject(error)
    }
);

// Response interceptors
service.interceptors.response.use(
    // async
    (response:AxiosResponse)=>{   
        console.log(response);
     return  response
    },
    (error:any)=>{
        if(error.response && error.response.code===401){
// store.commit('user/setUser',{})
// let fullpath=encodeURIComponent(router.currentRoute.value.fullpath)
// router.push('/login?path?=',fullpath)
        }
        return Promise.reject(error)
    }
    );

    export default service
