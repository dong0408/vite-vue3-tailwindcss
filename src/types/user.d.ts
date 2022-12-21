export type User={
    id:string
    account:string
    avatar:string
    mobile:string
    token:string
}

//验证码类型
export type CodeType='Login' | 'register' | 'changeMobile' | 'forgetPassword' | 'bindMobile'

//排出token得到对象类型
type OmitUser =Omit<User,'token'>
type UserInfo = OmitUser & {
    likeNumber:number
    collectionNumber:number
    score:number
    couponNumber:number
    orrderInfo:{
        paidNumber:number
        receivedNumber:number
        shippedNumber: number
        finishedNumber: number
    }
}