/** @format */

// 自己定义一个方法拦截路由
import store from '@/store';
import router from '@/router/index';

const whiteList = ['/pages/login/login-page', '/pages/start/start-page'];

export default function checkPermission(url) {
    const userToken = store.state.user.token;
    const userRole = store.state.user.role;

    if (whiteList.includes(url)) {
        return true;
    }
    if (!userToken) {
        return false;
    }

    // 获取当前要跳转的路由
    const currRoute = router.find((item) => item.path === url);

    if (currRoute && currRoute.meta && currRoute.meta.roles) {
        // 判断路由是否包含用户角色
        if (currRoute.meta.roles.includes(userRole)) {
            return true;
        }
        return false;
    }
    return false;
}
