/** @format */

import store from '@/store';
import cfg from '@/config';

export async function getNetworkType() {
    return new Promise((resolve) => {
        uni.getNetworkType().then((res) => {
            let type = false;
            if (res[1]) {
                switch (res[1].networkType) {
                    case '2g':
                    case '3g':
                        type = false;
                        break;
                    // case 'unknown':
                    case 'none':
                        type = true;
                        break;
                    case '4g':
                    case '5g':
                    case 'ethernet':
                    case 'wifi':
                        type = false;
                        break;
                    default:
                        type = false;
                        break;
                }
            }
            resolve(type);
        });
    });
}

export function requestInterceptors(url, data) {
    url = cfg.baseUrl + url;
    data.token = store.state.user.token;
    return { url, data };
}

export function responseInterceptors(res) {
    return new Promise((resolve, reject) => {
        if (res.statusCode === 401) {
            console.log('未登录，关闭所有页面，跳转至登录页');
            uni.clearStorageSync();
            uni.reLaunch({
                url: '/pages/login/index',
            });
            return;
        }
        if (res.data.success) {
            resolve(res.data.data);
        } else {
            reject(res.data);
        }
    });
}
