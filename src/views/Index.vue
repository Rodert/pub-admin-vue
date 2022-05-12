<template>
    <div class="">
        <el-header height="80px">
            <span></span>
            <el-button type="primary" icon="el-icon-user"  style="float: right;margin: 20px auto" @click="toLogin">
                <span>前往登录</span>
            </el-button>

        </el-header>
        <el-carousel :interval="4000" type="card" height="500px" style="margin-top: 20px">
            <el-carousel-item v-for="item in images" :key="item">
                <el-image :src="item" style="width: 400px;height: 300px;margin-left: 200px"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data () {
            return {
                images: [
                    'p1.jpg',
                    '/public/pic/p1.jpg',
                    '/public/pic/p1.jpg'

                ],
                url: '../../public/pic/p1.jpg'
            }
        },
        methods: {
            toLogin () {
                this.$router.push('Login')
            }
        }
    }
</script>
