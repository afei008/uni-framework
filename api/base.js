/** @format */

import { get, post } from '@/http';

export function getCompanyList(data) {
    return get('/user/companyList', data);
}

export function loginJobNumber(params) {
    return post('/user/login', params);
}

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
