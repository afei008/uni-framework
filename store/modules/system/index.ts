/** @format */

import { defineStore } from 'pinia';

type MenuButtonRect = {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
};
type SafeArea = {
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
};
type SafeAreaInsets = {
    left: number;
    right: number;
    top: number;
    bottom: number;
};

interface State {
    menuButtonRect: MenuButtonRect;
    navSafeWidth: string;
    safeArea: SafeArea | undefined;
    safeAreaInsets: SafeAreaInsets | undefined;
}

const useSystemStore = defineStore({
    id: 'system',
    state: (): State => ({
        menuButtonRect: {
            width: 0,
            height: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
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
    }),
    actions: {
        getSystemInfo() {
            const systemInfo = uni.getSystemInfoSync();
            this.safeArea = systemInfo.safeArea;
            this.safeAreaInsets = systemInfo.safeAreaInsets;
            // #ifdef MP
            this.menuButtonRect = uni.getMenuButtonBoundingClientRect();
            // 计算出 menuButton 左右边距，确保二者一样
            if (this.safeArea) {
                const padding =
                    (this.safeArea.width - this.menuButtonRect.right) * 2;
                this.navSafeWidth = `${
                    this.safeArea.width - this.menuButtonRect.width - padding
                }px`;
            }
            // #endif
        },
    },
});

export default useSystemStore;
