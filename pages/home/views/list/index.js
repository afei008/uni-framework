/** @format */

export default {
    data() {
        return {
            list: [],
            networkErr: false,
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            this.$api
                .getList()
                .then((res) => {
                    this.allPages = res.allPages;
                    this.list = [...this.list, ...res.data];
                })
                .catch((err) => console.log(err));
        },
    },
};
