import router from '@/router'
import { useUserStore } from '@/store/user'
import axios, { type Method } from 'axios'
import { ElMessage } from 'element-plus'
//1.axios的配置
//1.1创建一个实例，配置基准地址，配置响应时间
// 1.2 添加请求拦截器，在请求头携带token
// 1.3 添加响应拦截器，判断业务是否成功，剥离无效的数据，401错误拦截去登录页面(删除当前用户信息)，

const baseURL = 'https://consult-api.itheima.net/'
const instance = axios.create({
    baseURL,
    timeout: 5000,
})

instance.interceptors.request.use(
    config => {
        //修改config，比如请求头
        //获取token==>获取user
        const store = useUserStore()
        if (store.user?.token && config.headers) {
            config.headers.Authorization = `Bearer ${store.user.token}`
        }
        return config
    },
    err => Promise.reject(err)
)

//将来 axios.get()
// .then(res=>{ // res 就是后台的数据，之前的res.data })
// .catch(e=>{ // 200+10001这种情况，e就是res.data , 如果是状态吗的错误 401 403 404 e 就错误对象  })
instance.interceptors.response.use(
  (res)=>{
    if(res.data.code !==10000){
      // const $message= Message
      ElMessage(res.data.message ||'网络异常')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) =>{
    // 请求报错，响应出错
    // 遇见401跳转登录
    // 1. 现在在 /user/patient 页面下，发起一个获取用户信息的请求，但是此时token失效
    // 2. 跳转登录页面，登录成功之后，需要跳转回 /user/patient 页面 （默认跳转 /user 首页）
    // vue2  $router 路由实例，提供路由相关函数操作  $route  路由相关信息，query params path 。。
    if(err.response.status===401){
      const store=useUserStore()
      store.delUser()
      router.push('/login')
    }
return Promise.reject(err)
  }
)
type Data<T> = {
  code: string
  message: string
  data: T
}

const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  // 泛型的第二个参数，可以自定义响应数据类型
  return instance.request<T, Data<T>>({
    url,
    method,
    // 区分get和其他请求post
    // get 提交数据，选项：params
    // 其他请求post 提交数据，选项：data
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export { baseURL, instance, request }
