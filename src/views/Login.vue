<template>
<div class="container">
    <div>登录</div>
    <div class="main">
        <div class="loginbox">
            <input class="user" id="user" v-model="name" placeholder="用户名">

            <input  class="pwd"  id="password" v-model="pwd" type="password"  placeholder="密码">

            <button type="primary"  class="login_btn" @click="login">Login</button>

            <button type="primary"  class="register_btn" @click="register">Register</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',

    data: function () {
        return {
            name: '',
            pwd: '',
            user_list: [
                {
                id: '1',
                username: 'admin',
                password: '123'
                }
            ]
        }
    },

    methods: {
        login () {
            var flag = 0
            if (!this.$route.query.list) {
                this.user_list.forEach((item) => {
                    if (item.username == this.name) {
                        if (item.password == this.pwd) {
                            flag = 1
                            }
                        }
                    }
                )
                if (flag == 1) {
                    this.$router.push('Homepage')
                } else {
                    alert('用户名密码错误，请重新输入')
                }
            } else {
                var routerParams = this.$route.query.list
                this.user_list = routerParams
                this.user_list.forEach((item) => {
                        if (item.username == this.name) {
                            if (item.password == this.pwd) {
                                flag = 1
                            }
                        }
                    }
                )
                if (flag == 1) {
                    this.$router.push({
                        path: 'Homepage'
                    })
                } else {
                    alert('用户名密码错误，请重新输入！')
                }
            }
        },

        register () {
            this.$router.push('Register')
        }
    }
}
</script>

<style scoped>
    /* .loginbox{
        position:absolute;
        width:800px;
        height:400px;
        top:40%;
        left:50%;
        transform:translate(-50%,-50%);
    } */

</style>
