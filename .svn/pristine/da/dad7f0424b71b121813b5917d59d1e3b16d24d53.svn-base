<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-box">
        <h3 class="login-title">彩拉图后台管理系统</h3>
        <el-form-item label="" prop="username">
            <el-input type="text" placeholder="用户名" v-model="ruleForm.username" prefix-icon="el-icon-user"/>
        </el-form-item>
        <el-form-item label="" prop="password">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password" prefix-icon="el-icon-unlock"/>
        </el-form-item>
        <el-form-item class="forget">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <span class="forget-hint">忘记密码?</span>
        </el-form-item>
        <el-form-item>
            <el-button type="warning" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data (){
    var validateUser = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入账号'));
    } else {
        // if (this.ruleForm.username !== '') {
        //     this.$refs.ruleForm.validateField('username');
        // }
        callback();
    }
    };
    var validatePass = (rule, value, callback) => {
    if (value.length < 6) {
        callback(new Error('密码不能少于6位数'));
    }else {
        callback();
    }
    };
    return {
        ruleForm: {
            username: '',
            password: ''
        },
        checked:false,
        rules: {
            username: [
                {validator:validateUser, trigger: 'blur'}
            ],
            password: [
                {validator:validatePass, trigger: 'blur'}
            ]
        }
    }
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$message({
                    message: '登录成功',
                    type: 'success'
                });
                this.$router.push('/Home')
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
  }
}
</script>
<style lang="scss" scoped>
    .login{
        background:#f2f2f2;//20222A
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .login-box{
        width: 335px;
        padding: 10px 20px;
        border-radius: 8px;
        position: fixed;
        left: 50%;
        top: 42%;
        font-size: 26px;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        background:#fff;//50423c
        .login-title{
            text-align: center;
            margin-top: 22px;
        }
        .el-input{
            font-size: 15px;
            &.is-active .el-input__inner,/deep/ .el-input__inner:focus,
            .el-checkbox /deep/ .el-checkbox__input.is-focus{
                border-color: #FB901C;
            }
        }
        .el-checkbox /deep/ .el-checkbox__input.is-checked + .el-checkbox__label{
            color: #FB901C;
        }
        .el-checkbox{
            /deep/{
                .el-checkbox__input.is-checked .el-checkbox__inner, 
                .el-checkbox__input.is-indeterminate .el-checkbox__inner{
                    background-color: #FB901C;
                    border-color: #FB901C;
                }
                .el-checkbox__input.is-focus .el-checkbox__inner,
                .el-checkbox__inner:hover{
                    border-color: #FB901C;
                }
            }
        }
        .el-button{
            width: 335px;
            background:#FB901C;//211a1a
        }
        .forget{
            margin:-10px 0 12px;
            .forget-hint{
                float: right;
                color: #FB901C;
                cursor: pointer;
            }
        }
    }
</style>
