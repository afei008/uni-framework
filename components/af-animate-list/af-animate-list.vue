<!-- @format -->

<template>
    <view class="animate-list">
        <view ref="con" class="con" :class="{ anim: animate, top: animate }">
            <view
                v-for="item in targetList"
                :key="item.name"
                class="item flex ac"
            >
                <view class="img-wrap">
                    <image :src="item.img" class="img"></image>
                </view>
                <view class="name">
                    {{ item.name }}
                </view>
                <view class="content ellipsis">
                    {{ item.content }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'AnimateList',
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            animate: false,
            targetList: [],
        };
    },
    watch: {
        list(nv) {
            this.targetList = nv;
        },
    },
    mounted() {
        this.targetList = this.list;
        this.timer = setInterval(this.scroll, 1500);
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        scroll() {
            this.animate = !this.animate;
            setTimeout(() => {
                this.targetList.push(this.targetList[0]);
                this.targetList.shift();
                // 这个地方如果不把animate 取反会出现消息回滚的现象
                this.animate = !this.animate;
            }, 500);
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'style';
</style>
