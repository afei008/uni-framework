/** @format */

let temp = {};
const files = require.context('./', true, /\.js$/);
files.keys().forEach((fileName) => {
    if (fileName === './index.js') {
        return;
    }
    const methods = files(fileName).default || files(fileName);
    temp = { ...temp, ...methods };
});

const api = { ...temp };

export default api;
