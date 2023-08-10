<!-- @format -->

<template>
    <view v-if="show" class="network-wrap">
        <view class="network-error">
            <view class="image">
                <image class="img" :src="Icon" />
            </view>
            <view class="text">
                <text>加载失败，</text>
                <text class="btn" @click="clickRetry"> 点击重试 </text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import Icon from './network-error.png';

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['retry']);

const clickRetry = () => {
    emit('retry');
};

watch(
    () => props.show,
    (nv) => {
        console.log(nv);
    }
);
</script>

<style lang="scss" scoped>
@import './style';
</style>
