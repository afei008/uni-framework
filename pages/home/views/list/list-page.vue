<!-- @format -->

<template>
    <view>
        <af-network-error
            :show="networkErr"
            @retry="networkErr = false"
        ></af-network-error>
        {{ networkErr }}
        <template v-if="!networkErr">
            <view>上拉加载更多演示</view>
            <button @click="clickMock">点击我模拟无网络情况</button>
            <view v-for="(item, index) in list" :key="index" class="item">
                {{ item.title }}
            </view>
        </template>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onReachBottom } from '@dcloudio/uni-app';
import useReachBottom from '@/common/composables/reachBottom';
import useList from './composables/list';

const { pageNo, allPages, list, changePageNo } = useList();
const { reachBottom } = useReachBottom(pageNo, allPages, changePageNo);

const networkErr = ref(false);
const clickMock = () => {
    networkErr.value = !networkErr.value;
};

onReachBottom(() => {
    reachBottom();
});
</script>

<style lang="scss" scoped>
@import './style';
</style>
