<template>
    <!-- model:绑定数据对象 -->
    <!-- ref:获取dom元素，这个$.this.refs.form -->
    <!-- rules:表单验证规则 -->
    <el-form 
        :model="form" 
        ref="form"
        :rules="rules" 
        class="form">
        <!-- 用户名的输入框 -->
        <el-form-item class="form-item" prop="username">
            <el-input 
             v-model="form.username"
            placeholder="用户名/手机">
            </el-input>
        </el-form-item>

            <!-- 密码输入框 -->
        <el-form-item class="form-item" prop="password">
            <el-input 
            v-model="form.password"
            placeholder="密码" 
            type="password">
            </el-input>
        </el-form-item>

        <p class="form-text">
            <nuxt-link to="#">忘记密码</nuxt-link>
        </p>
        <!-- 登录按钮 -->
        <el-button 
        class="submit"
        type="primary"
        @click="handleLoginSubmit">
            登录
        </el-button>
    </el-form>

</template>

<script>
export default {
    data(){
        return {
            // 表单数据
            form: {
                username: "",   // 登录用户名/手机号
                password: ""    // 登录密码
            },
            // 表单规则
            rules: {
                // 表单规则，只负责提示，但表单还是会提交
                username:[
                    // required:要求，message：信息，trigger：触发，blur：模糊
                    {required:true,message:"请输入用户名",trigger:blur}
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:blur}
                ],
            },
        }
    },
    methods: {
    // 提交登录
    handleLoginSubmit(){
        // 验证表单
        this.$refs['form'].validate((valid) => {
            // 为true表示没有错误
            if (valid) {
                // 删除代码
                // this.$axios({
                //     url: "/accounts/login",
                //     method: "POST",
                //     data: this.form
                // }).then(res => {
                //     console.log(res.data);
                // })
				
                // 新增代码
                this.$store.dispatch("user/login", this.form).then(res => {
                    // 成功提示
                    this.$message({
                        message: "登录成功，正在跳转",
                        type: "success"
                    });
                    // 跳转到首页
                    setTimeout(() => {
                        this.$router.replace("/")
                    }, 1000);
                })
            }
        })
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>