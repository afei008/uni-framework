/** @format */

// 该动态引入在此处貌似没有什么用，因为没有将其绑定在原型链上
// vue3 的原型链绑定并不实用，每个使用的地方还是要手动引入一次

let temp = {};
// @ts-ignore 无法解决 vscode 提示 glob 不存在
const files = import.meta.glob('./**/index.ts', { eager: true });
Object.entries(files).forEach((item) => {
    const [key, value] = item as any;
    temp = { ...temp, ...value.default };
});

const api = { ...temp } as any;

export default api;
