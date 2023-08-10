/** @format */

import { ref, Ref } from 'vue';

type Cb = (pageNo: number) => void;

export default function useReachBottom(
    pageNo: Ref<number>,
    allPages: Ref<number>,
    callback?: Cb
) {
    const loadStatus = ref('loadmore');

    const reachBottom = () => {
        console.log('到达底部');
        if (pageNo.value < allPages.value) {
            loadStatus.value = 'loading';
            pageNo.value += 1;
            if (callback) {
                callback(pageNo.value);
            }
        } else {
            loadStatus.value = 'nomore';
        }
    };

    return {
        reachBottom,
    };
}
