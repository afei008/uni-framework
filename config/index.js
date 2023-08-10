/** @format */

const cfg = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
};

if (process.env.NODE_ENV === 'development') {
    cfg.baseUrl = 'https://api.dev.com'; // 开发环境
} else {
    cfg.baseUrl = 'https://api.prod.com'; // 生产环境
}

export default cfg;
