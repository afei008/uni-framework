/** @format */

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import checkPermission from '@/permission';

function queryParams(data: Record<string, unknown> = {}) {
    const prefix = '?';
    const result = [];
    for (const key in data) {
        const value = data[key] as string;
        // 去掉为空的参数
        if (['', undefined, null].indexOf(value) < 0) {
            result.push(`${key}=${value}`);
        }
    }
    return result.length ? prefix + result.join('&') : '';
}

function obj2query(url: string, params?: Record<string, unknown>) {
    if (!params) {
        return url;
    }
    const target = queryParams(params);
    return `${url}${target}`;
}

export function navigateTo(url: string, params?: Record<string, unknown>) {
    if (checkPermission(url)) {
        uni.navigateTo({
            url: obj2query(url, params),
        });
    } else {
        console.log(url, '无权访问');
    }
}
export function redTo(url: string, params?: Record<string, unknown>) {
    if (checkPermission(url)) {
        uni.redirectTo({
            url: obj2query(url, params),
        });
    } else {
        console.log(url, '无权访问');
    }
}
export function lauTo(url: string, params?: Record<string, unknown>) {
    if (checkPermission(url)) {
        uni.reLaunch({
            url: obj2query(url, params),
        });
    } else {
        console.log(url, '无权访问');
    }
}
export function swiTo(url: string) {
    if (checkPermission(url)) {
        uni.switchTab({
            url,
        });
    } else {
        console.log(url, '无权访问');
    }
}
export function navBack(delta: number) {
    uni.navigateBack({
        delta,
    });
}

export function navTo(url: string, params?: Record<string, unknown>) {
    if (!url) {
        return;
    }
    let newUrl = url;
    if (url[0] === '/') {
        /* 过滤首位的/ */
        newUrl = url.substring(1);
    }
    const pathname = newUrl.split('?')[0];
    // eslint-disable-next-line no-undef
    const page = getCurrentPages();
    const index = page.findIndex((item) => item.route === pathname);
    if (index !== -1) {
        /* 在页面栈中找到时 */
        const step = page.length - 1 - index;
        if (step === 0) {
            redTo(url, params);
        } else {
            navBack(step);
        }
        return;
    }
    /* 否则就直接跳转 */
    navigateTo(url, params);
}

export default {
    navTo,
    redTo,
    lauTo,
    swiTo,
    navBack,
};
