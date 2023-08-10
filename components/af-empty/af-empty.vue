<!-- @format -->

<template>
    <view class="empty-wrap" :style="{ height: height }">
        <view class="empty-main flex column ac jc">
            <view class="img-wrap">
                <image :src="icon" class="img"></image>
            </view>
            <view class="text-wrap"> {{ text }} </view>
        </view>
    </view>
</template>

<script>
import Icon from './no-data.png';

export default {
    props: {
        text: {
            type: String,
            default: '没有数据~',
        },
        height: {
            type: String,
            default: '400rpx',
        },
    },
    data() {
        return {
            icon: Icon,
        };
    },
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
