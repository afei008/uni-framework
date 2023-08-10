<!-- @format -->

<template>
    <view>
        <view>测试登录之后存储token然后跳转</view>
        <button @click="clickLogin">登录</button>
    </view>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'LoginPage',
    methods: {
        ...mapActions('user', ['login']),
        clickLogin() {
            this.login().then(() => {
                console.log('登录成功');
            });
        },
    },
};
</script>
