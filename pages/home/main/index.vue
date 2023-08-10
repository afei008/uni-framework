<!-- @format -->

<template>
    <view class="page-main">
        <view
            v-for="(item, index) in list"
            :key="index"
            class="item"
            @click="clickItem(item)"
        >
            {{ item.title }}
        </view>
        <af-empty></af-empty>
        <view
            class="foot"
            :style="{ 'padding-bottom': safeAreaInsets.bottom + 'px' }"
            >foot</view
        >
    </view>
</template>

<script>
import indexMixin from './index';

export default {
    name: 'HomeIndex',
    mixins: [indexMixin],
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
