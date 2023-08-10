<!-- @format -->

<template>
    <view v-if="show" class="network-wrap">
        <view class="network-error">
            <view class="image">
                <image class="img" :src="icon" />
            </view>
            <view class="text">
                <text>加载失败，</text>
                <text class="btn" @click="clickRetry"> 点击重试 </text>
            </view>
        </view>
    </view>
</template>

<script>
import Icon from './network-error.png';

export default {
    name: 'AfNetworkError',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            icon: Icon,
        };
    },
    watch: {
        show(nv, ov) {
            console.log(nv, ov);
        },
    },
    methods: {
        clickRetry() {
            this.$emit('retry');
        },
    },
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
