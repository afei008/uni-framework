<!-- @format -->

<template>
    <view>
        <button @click="clickLogin">登录</button>
    </view>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user';

const userStore = useUserStore();
const clickLogin = () => {
    userStore.login().then(() => {
        console.log('登录成功');
    });
};
</script>
