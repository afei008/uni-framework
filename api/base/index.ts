/** @format */

import { get } from '@/http';

interface Cp {
    enpType: number;
}

export function getCompanyList(params: Cp): Promise<Api.Response<Cp>> {
    return get('/user/companyList', params);
}

export default {
    getCompanyList,
};
