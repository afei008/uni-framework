<!-- @format -->

<template>
    <view class="empty-wrap" :style="{ height: height }">
        <view class="empty-main flex column ac jc">
            <view class="img-wrap">
                <image :src="Icon" class="img"></image>
            </view>
            <view class="text-wrap"> {{ text }} </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import Icon from './no-data.png';

defineProps({
    text: {
        type: String,
        default: '没有数据~',
    },
    height: {
        type: String,
        default: '400rpx',
    },
});
</script>

<style lang="scss" scoped>
@import './style';
</style>
