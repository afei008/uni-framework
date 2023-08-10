/** @format */

export function getList() {
    return new Promise((resolve) => {
        const res = {
            data: Array.from({ length: 20 }, (_, i) => {
                return { id: i + 1, title: `列表${i}` };
            }),
            allPages: 2,
        };
        setTimeout(() => {
            resolve(res);
        }, 500);
    });
}

export default {
    getList,
};
