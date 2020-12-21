<template>
    <div class="main login-main" id="main">
        <common-header/>
        <el-container>
            <el-row :gutter="24" class="main-row" justify="center" type="flex">
                <el-col :md="4" :xs="20">
                    <h1>Login</h1>
                    <el-form ref="form" class="auth-form" :model="loginForm" label-position="top">
                        <el-form-item label="Username">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="Password">
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
    import CommonHeader from '@/components/Common/Header'

    export default {
        name: 'Login',
        components: { CommonHeader },
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
                /* this.$http.post('http://localhost:8090/api/auth/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                }).then((res) => {
                    console.log('res', res)
                }) */
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
