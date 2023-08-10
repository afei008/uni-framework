<!-- @format -->

<script>
import { mapActions } from 'vuex';

export default {
    onLaunch() {
        console.log('App Launch');
        this.getSystemInfo();
    },
    onShow() {
        console.log('App Show');
    },
    onHide() {
        console.log('App Hide');
    },
    methods: {
        ...mapActions('system', ['getSystemInfo']),
    },
};
</script>

<style lang="scss">
/* 每个页面公共css */
@import '@/static/font/iconfont.css';
@import '/styles/index';
</style>
