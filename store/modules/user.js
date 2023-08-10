/** @format */

import { setToken, getToken, getRole, setRole } from '@/storage/user';
import { lauTo } from '@/common/nav';

const defaultState = () => ({
    token: getToken(),
    role: getRole(),
});

const userStore = {
    namespaced: true,
    state: defaultState(),
    getters: {},
    mutations: {
        SET_TOKEN(state, data) {
            state.token = data;
            setToken(data);
        },
        SET_ROLE(state, data) {
            state.role = data;
            setRole(data);
        },
    },
    actions: {
        async login({ commit }) {
            commit('SET_TOKEN', 'this is token');
            commit('SET_ROLE', 'admin');
            lauTo('/pages/home/main/index');
        },
    },
};

export default userStore;
