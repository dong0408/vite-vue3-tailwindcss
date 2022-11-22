<template>
    <div class="login">
        <div class="tip">
            <p>嘿!</p>
            <p>赶紧登陆吧</p>
        </div>
        <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    class="demo-ruleForm"
  >
    <el-form-item  prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off"  placeholder="phone"  style="height:40px"/>
    </el-form-item>
    <el-form-item  prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
        placeholder="password"
        style="height:40px"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

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
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
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
</script>

<style lang="scss" scoped>
.login {
    width: 450px;
    height: 500px;
    background-color: #fafbff;
    border-radius: 15px;
    box-shadow: 1px 3px 32px 8px rgb(7 15 57 / 8%);
}
.tip{
    margin: 30px;
}
p{
display: flex;
}
.el-form{
width: 410px;
margin: 0 20px;
margin-top: 80px;
}
// .el-input__wrapper{
//     border-radius: 20px;
// }
.el-button--primary{
    width: 100%;
}
.el-input__inner {
    height: 40px;
}
.el-form-item {
margin-bottom: 40px;
}
</style>
