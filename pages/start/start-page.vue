<!-- @format -->

<template>
    <view>
        <view>启动页</view>
        <view>
            当使用 script setup的写法时，需要从 @dcloudio/uni-app 导入对应的
            uniapp 的生命周期
        </view>
        <button @click="clickTo(0)">跳到首页</button>
        <button @click="clickTo(1)">跳到登录页</button>
    </view>
</template>

<script setup lang="ts" name="AppStart">
import { navTo } from '@/common/nav';

const clickTo = (type: number) => {
    let url = '/pages/home/main/main-page';
    if (type === 1) {
        url = '/pages/login/login-page';
    }
    navTo(url);
};
</script>
