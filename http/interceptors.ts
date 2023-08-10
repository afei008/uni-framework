/** @format */

import useUserStore from '@/store/modules/user';
import cfg from '@/config';

export async function getNetworkType() {
    return new Promise((resolve) => {
        uni.getNetworkType({
            success: (res) => {
                let type = false;
                if (res) {
                    switch (res.networkType) {
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
            },
        });
    });
}

export function requestInterceptors(
    url: string,
    data: Record<string, unknown>
) {
    const userStore = useUserStore();
    url = cfg.baseUrl + url;
    data.token = userStore.token;
    return { url, data };
}

export function responseInterceptors(res: any) {
    return new Promise((resolve, reject) => {
        if (res.statusCode === 401) {
            console.log('未登录，关闭所有页面，跳转至登录页');
            uni.clearStorageSync();
            uni.reLaunch({
                url: '/pages/login/login-page',
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
