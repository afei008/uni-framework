/** @format */

// 页面滚动到底部加载下一页数据
export default {
    data() {
        return {
            list: [],
            pageNo: 1,
            pageSize: 10,
            allPages: 0,
            loadStatus: 'loadmore',
        };
    },
    onReachBottom() {
        console.log('到达底部');
        if (this.pageNo < this.allPages) {
            this.loadStatus = 'loading';
            this.pageNo += 1;
            this.getData();
        } else {
            this.loadStatus = 'nomore';
        }
    },
    methods: {
        getData() {
            console.log('get data');
        },
        clearData() {
            this.list = [];
            this.pageNo = 1;
            this.allPages = 0;
        },
        checkLoadStatus() {
            // 检查当前状态
            if (this.pageNo >= this.allPages) {
                this.loadStatus = 'nomore';
            } else {
                this.loadStatus = 'loading';
            }
        },
    },
};
