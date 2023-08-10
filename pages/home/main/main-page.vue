<!-- @format -->

<template>
    <view class="page-main">
        <view class="text-area">
            <text class="title">
                {{ title }}
            </text>
        </view>
        <text-comp />
        <view
            v-for="(item, index) in list"
            :key="index"
            class="item"
            @click="clickItem(item)"
        >
            {{ item.title }}
        </view>

        <view class="foot" :style="{ 'padding-bottom': safeBottom + 'px' }"
            >foot</view
        >
    </view>
</template>

<script setup lang="ts" name="HomeIndex">
import { navTo } from '@/common/nav';
import TextComp from './components/test.vue';
import useSystemStore from '@/store/modules/system/index';

const systemStore = useSystemStore();
const safeBottom = systemStore.safeAreaInsets?.bottom;

const title = 'hello111';
const list = [{ id: 1, title: '列表页', url: '/pages/home/views/list/index' }];
const clickItem = (item: any) => {
    navTo(item.url);
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
