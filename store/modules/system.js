/** @format */

const systemState = {
    namespaced: true,
    state: {
        // 小程序平台右上角悬浮按钮位置
        menuButtonRect: {
            width: 0,
            height: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        // 自定义导航栏的安全宽度
        navSafeWidth: '750rpx',
        safeArea: {
            width: 0,
            height: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        safeAreaInsets: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    getters: {
        menuButtonRect(state) {
            return state.menuButtonRect;
        },
        navWidth(state) {
            return state.navWidth;
        },
        safeBottom(state) {
            return state.safeAreaInsets.bottom;
        },
    },
    mutations: {
        GET_SYSTEM_INFO(state) {
            const systemInfo = uni.getSystemInfoSync();
            state.safeArea = systemInfo.safeArea;
            state.safeAreaInsets = systemInfo.safeAreaInsets;
            // #ifdef MP
            state.menuButtonRect = uni.getMenuButtonBoundingClientRect();
            // 计算出 menuButton 左右边距，确保二者一样
            const padding =
                (state.safeArea.width - state.menuButtonRect.right) * 2;
            state.navSafeWidth = `${
                state.safeArea.width - state.menuButtonRect.width - padding
            }px`;
            // #endif
        },
    },
    actions: {
        getSystemInfo({ commit }) {
            commit('GET_SYSTEM_INFO');
        },
    },
};

export default systemState;
