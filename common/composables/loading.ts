/** @format */

import { ref } from 'vue';

export default function useLoading() {
    const networkErr = ref(false);
    const isLoading = ref(false);

    const showLoading = (title = '加载中') => {
        isLoading.value = true;
        uni.showLoading({ title });
    };
    const hideLoading = (err: { networkErr: boolean }) => {
        isLoading.value = false;
        if (err) {
            networkErr.value = err.networkErr;
            // 快手小程序 loading 弹窗与 toast 弹窗不共用
            // 在请求失败时不会被失败的 toast 弹窗顶掉，因此需要手动隐藏
            setTimeout(() => {
                uni.hideLoading();
            }, 1000);
        } else {
            uni.hideLoading();
        }
    };
    return {
        networkErr,
        isLoading,
        showLoading,
        hideLoading,
    };
}
