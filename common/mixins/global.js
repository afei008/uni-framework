/** @format */

export default {
    data() {
        return {
            pageTitle: '',
        };
    },
    mounted() {
        this.setPageTitle(this.pageTitle);
    },
    methods: {
        setPageTitle(pageTitle) {
            if (pageTitle) {
                this.pageTitle = pageTitle;
                uni.setNavigationBarTitle({
                    title: this.pageTitle,
                });
            }
        },
    },
};
