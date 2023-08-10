/** @format */

declare module '@dcloudio/uni-app' {
    export function onLaunch(callback: () => void): void;
    export function onShow(callback: () => void): void;
    export function onHide(callback: () => void): void;
    export function onReachBottom(callback: () => void): void;
    // 添加其他需要自定义类型的导出
}
