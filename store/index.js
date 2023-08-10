/** @format */

import Vue from 'vue';
import Vuex from 'vuex';

let temp = {};
const files = require.context('./modules', true, /\.js$/);
files.keys().forEach((fileName) => {
    const name = fileName.slice(2, -3);
    const methods = files(fileName).default || files(fileName);
    temp = { ...temp, [name]: methods };
});

Vue.use(Vuex);

export default new Vuex.Store({
    modules: temp,
});
