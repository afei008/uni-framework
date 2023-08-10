/** @format */

export function setToken(data) {
    uni.setStorageSync('token', data);
}

export function getToken() {
    const data = uni.getStorageSync('token');
    if (data) {
        return data;
    }
    return 'this is token';
}

export function removeToken() {
    uni.removeStorageSync('token');
}

export function setRole(data) {
    uni.setStorageSync('role', data);
}

export function getRole() {
    const data = uni.getStorageSync('role');
    if (data) {
        return data;
    }
    return '';
}

export function removeRole() {
    uni.removeStorageSync('role');
}
