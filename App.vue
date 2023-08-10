<!-- @format -->

<script lang="ts" setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import useSystemStore from '@/store/modules/system/index';

onLaunch(() => {
    console.log('App Launch');
    const systemStore = useSystemStore();
    systemStore.getSystemInfo();
});
onShow(() => {
    console.log('App Show');
});
onHide(() => {
    console.log('App Hide');
});
</script>

<style lang="scss">
/* 每个页面公共css */
@import '@/static/font/iconfont.css';
@import '/styles/index';
</style>
