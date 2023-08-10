/** @format */

export default {
    methods: {
        clickTo(type) {
            let url = '/pages/home/main/main-page';
            if (type === 1) {
                url = '/pages/login/login-page';
            }
            this.$navTo(url);
        },
    },
};
