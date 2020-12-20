<template>
    <div class="main login-main" id="main">
        <el-container>
            <el-row :gutter="24" class="main-row" justify="center" type="flex">
                <el-col :md="4" :xs="20">
                    <h1>登录</h1>
                    <el-form ref="form" class="auth-form" :model="loginForm" label-position="top">
                        <el-form-item label="用户名">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="loginForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button id="login-button" type="primary" @click="submitForm">Login</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script>
    import '../assets/less/views/auth.less'
    import '../assets/less/main.less'
    import { mapActions } from 'vuex'

    export default {
        name: 'Login',
        data () {
            return {
                loginForm: {
                }
            }
        },
        methods: {
            ...mapActions({
                authLogin: 'auth/authLogin'
            }),
            async submitForm () {
                await this.authLogin({
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                this.$router.replace('/')
            }
        }
    }
</script>

<style scoped>

</style>
