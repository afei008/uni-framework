/** @format */

export default {
    methods: {
        clickTo(type) {
            let url = '/pages/home/index-view/index';
            if (type === 1) {
                url = '/pages/login/index';
            }
            this.$navTo(url);
        },
    },
};
