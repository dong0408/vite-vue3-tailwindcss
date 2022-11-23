<template>
    <div class="login">
        <div class="tip">
            <p>嘿!</p>
            <p>赶紧登陆吧!</p>
        </div>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
            <el-form-item prop="phone">
                <el-input v-model="ruleForm.phone" type="phone" autocomplete="off" placeholder="手机号" style="height: 40px" />
            </el-form-item>
            <el-form-item prop="pass">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="密码" style="height: 40px" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import {useRouter} from 'vue-router'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the age'))
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
        } else {
            if (value < 18) {
                callback(new Error('Age must be greater than 18'))
            } else {
                callback()
            }
        }
    }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    phone: '',
    pass: '',
    age: '',
})

const rules = reactive({
    phone: [{ validator: validatePass2, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
})
const router=useRouter()
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(valid => {
        if (valid) {
            console.log(VUE_APP_BASE_API,'12');
            
            // console.log('submit!')
            router.push('/home')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
console.log(import.meta.env.VITE_APP_BASE_API);
</script>

<style lang="scss" scoped>
.login {
    width: 450px;
    height: 500px;
    background-color: #fafbff;
    border-radius: 15px;
    box-shadow: 1px 3px 32px 8px rgb(7 15 57 / 8%);
}
.tip {
    margin: 30px;
    font-size: 30px;
}
p {
    display: flex;
    margin: 15px 0;
}
.el-form {
    width: 410px;
    margin: 0 20px;
    margin-top: 50px;
}
// .el-input__wrapper{
//     border-radius: 20px;
// }
.el-button--primary {
    width: 100%;
}
.el-input__inner {
    height: 40px;
}
.el-form-item {
    margin-bottom: 40px;
}
</style>
