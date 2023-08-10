/** @format */

import Vue from 'vue';
import { navTo, redTo, lauTo, swiTo, navBack } from '@/common/nav';
import store from '@/store/index.js';
import globalMixin from '@/common/mixins/global';
import api from '@/api';
import App from './App';

Vue.mixin(globalMixin);
// 定义了全局引用的 $api，不过建议通过 import 导入
Vue.prototype.$api = api;
Vue.prototype.$navTo = navTo;
Vue.prototype.$redTo = redTo;
Vue.prototype.$lauTo = lauTo;
Vue.prototype.$swiTo = swiTo;
Vue.prototype.$navBack = navBack;

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
    store,
    ...App,
});
app.$mount();
