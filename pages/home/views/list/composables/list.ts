/** @format */

import { reactive, toRefs, onMounted, watch } from 'vue';
import { getList } from '@/api/list';

export default function useList() {
    const state = reactive({
        isLoading: false,
        list: [] as any[],
        allPages: 0,
    });

    const params = reactive({
        pageNo: 1,
        pageSize: 10,
    });

    const changePageNo = (pageNo: number) => {
        params.pageNo = pageNo;
    };

    const getData = () => {
        getList()
            .then((res: any) => {
                state.allPages = res.allPages;
                state.list = [...state.list, ...res.data];
            })
            .catch((err: any) => console.log(err));
    };

    watch(
        params,
        () => {
            getData();
        },
        { deep: true }
    );
    onMounted(getData);

    return {
        ...toRefs(state),
        ...toRefs(params),
        changePageNo,
    };
}
