/** @format */

function saveImgMp(url: string) {
    uni.getImageInfo({
        src: url,
        success: (res) => {
            uni.saveImageToPhotosAlbum({
                filePath: res.path,
                success: () => {
                    uni.showToast({
                        title: '保存成功',
                    });
                },
                fail: (err) => {
                    uni.showToast({ title: '保存失败', icon: 'none' });
                    console.log('保存图片失败', err);
                },
            });
        },
        fail: (err) => {
            uni.showToast({ title: '保存失败', icon: 'none' });
            console.log('获取图片信息失败', err);
        },
    });
}
function saveImgH5(url: string) {
    if (navigator.userAgent.indexOf('Mobile') < 0) {
        const image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext('2d');
            // 绘制图片
            context!.drawImage(image, 0, 0, image.width, image.height);
            // 得到图片的 base64 编码
            const base64 = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            const event = new MouseEvent('click');
            a.href = base64;
            a.download = '邀请代理注册';
            // 触发点击事件
            a.dispatchEvent(event);
        };
        image.src = url;
    } else {
        uni.showToast({
            title: '长按图片保存',
            icon: 'none',
        });
    }
}

export default function saveImg(url: string) {
    // #ifdef H5
    saveImgH5(url);
    // #endif
    // #ifdef MP
    saveImgMp(url);
    // #endif
}
