/** @format */

import { mapState } from 'vuex';

export default {
    data() {
        return {
            pageTitle: '首页',
            list: [
                { id: 1, title: '列表页', url: '/pages/home/views/list/index' },
            ],
        };
    },
    computed: {
        ...mapState('system', ['safeAreaInsets']),
    },
    methods: {
        clickItem(item) {
            this.$navTo(item.url);
        },
    },
};
