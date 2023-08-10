/** @format */

import { get, post } from '@/http';

export function getCompanyList(data) {
    return get('/user/companyList', data);
}

export function loginJobNumber(params) {
    return post('/user/login', params);
}
