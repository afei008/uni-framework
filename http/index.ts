/** @format */
/* eslint-disable prefer-promise-reject-errors */

import cfg from '@/config';

import {
    getNetworkType,
    requestInterceptors,
    responseInterceptors,
} from './interceptors';

type Method =
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined;

async function request(
    url: string,
    params: Record<string, unknown>,
    method: Method
) {
    const networkErr = await getNetworkType();
    return new Promise((resolve, reject) => {
        if (networkErr) {
            reject({ networkErr });
            uni.showToast({
                title: '网络错误',
                icon: 'none',
            });
            return;
        }
        uni.request({
            ...requestInterceptors(url, params),
            method,
            header: cfg.headers,
            success(res) {
                responseInterceptors(res)
                    .then((response) => resolve(response))
                    .catch((err) => reject(err));
            },
            fail(err) {
                uni.showToast({
                    title: '请求失败',
                    icon: 'none',
                });
                reject({ err, networkErr: true });
            },
        });
    });
}

export function get(url: string, params = {}): Promise<any> {
    return request(url, params, 'GET');
}

export async function post(url: string, params = {}): Promise<any> {
    return request(url, params, 'POST');
}

export async function put(url: string, params = {}): Promise<any> {
    return request(url, params, 'PUT');
}
