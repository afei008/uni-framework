/** @format */

export function setToken(data: string): void {
    uni.setStorageSync('token', data);
}

export function getToken(): string {
    const data = uni.getStorageSync('token');
    if (data) {
        return data;
    }
    return 'this is token';
}

export function removeToken() {
    uni.removeStorageSync('token');
}

export function setRole(data: string): void {
    uni.setStorageSync('role', data);
}

export function getRole(): string {
    const data = uni.getStorageSync('role');
    if (data) {
        return data;
    }
    return '';
}

export function removeRole() {
    uni.removeStorageSync('role');
}
