<template>
<div class="container">
    <div>注册</div>
    <div class="main">
        <div class="loginbox">
            <input class="user" id="user" v-model="name" placeholder="用户名">

            <input  class="pwd"  id="password" v-model="pwd" type="password"  placeholder="密码">

            <input  class="pwd"  id="re_password"  v-model="repwd" type="password"  placeholder="确认密码">
、

            <button type="primary"  class="register_btn" @click="register">Register</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            name: '',
            pwd: '',
            repwd: '',
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
        register () {
            var flag = 1
            // 如果用户名存在，则需要更换一个用户名
            this.user_list.forEach((item) => {
                if (item.username == this.name) {
                    alert('用户名存在，请更换')
                    flag = 0
                }
            })
            if (flag) {
                if (this.pwd != this.repwd) {
                    alert('俩次密码不一致')
                } else {
                    var item = {}
                    item.username = this.name
                    item.password = this.pwd
                    this.user_list.push(item)
                    alert('注册成功')

                    this.$router.push({
                        path: '/Login',
                        query: {
                            list: this.user_list
                        }
                    })
                }
            }
        }
    }
}
</script>
