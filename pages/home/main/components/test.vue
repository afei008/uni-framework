<!-- @format -->

<template>
    <view @click="clickText"> 这是 test 组件 </view>
</template>

<script setup lang="ts" name="TextComp">
import { navTo } from '@/common/nav';

const clickText = () => {
    navTo('/pages/test/index', {
        id: 1,
        name: 'uniapp',
    });
};
</script>
