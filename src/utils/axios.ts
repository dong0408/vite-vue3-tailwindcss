import axios, {AxiosRequestConfig,AxiosResponse} from "axios";
const service =axios.create()

 // Request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig)=>{
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
        return Promise.reject(error)
    }
    );

    export default service
