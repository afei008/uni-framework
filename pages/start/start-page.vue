<!-- @format -->

<template>
    <view class="container">
        <view
            >启动页，适用于需要登录的程序，在此处判断是否登录，避免页面从首页闪跳到登录页
        </view>
        <button @click="clickTo(0)">跳到首页</button>
        <button @click="clickTo(1)">跳到登录页</button>
    </view>
</template>

<script>
import indexMixin from './index';

export default {
    name: 'StartPage',
    mixins: [indexMixin],
};
</script>
