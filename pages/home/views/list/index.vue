<!-- @format -->

<template>
    <view>
        <af-network-error
            :show="networkErr"
            @retry="networkErr = false"
        ></af-network-error>
        <template v-if="!networkErr">
            <view>上拉加载更多演示</view>
            <button @click="networkErr = true">点击我模拟无网络情况</button>
            <view v-for="(item, index) in list" :key="index" class="item">
                {{ item.title }}
            </view>
        </template>
    </view>
</template>

<script>
import reachBottomMixin from '@/common/mixins/reachBottom';
import indexMixin from './index';

export default {
    name: 'ListPage',
    mixins: [reachBottomMixin, indexMixin],
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
