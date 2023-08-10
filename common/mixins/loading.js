/** @format */

export default {
    data() {
        return {
            networkErr: false,
            isLoading: false,
        };
    },
    methods: {
        showLoading(title = '加载中') {
            this.isLoading = true;
            uni.showLoading({ title });
        },
        hideLoading(err) {
            this.isLoading = false;
            if (err) {
                console.log(err);
                this.networkErr = err.networkErr;
                // 快手小程序 loading 弹窗与 toast 弹窗不共用
                // 在请求失败时不会被失败的 toast 弹窗顶掉，因此需要手动隐藏
                setTimeout(() => {
                    uni.hideLoading();
                }, 1000);
            } else {
                uni.hideLoading();
            }
        },
    },
};
