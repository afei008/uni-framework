/** @format */

import { defineStore } from 'pinia';
import { setToken, getToken, getRole, setRole } from '@/storage/user';
import { lauTo } from '@/common/nav';

interface State {
    token: string;
    role: string;
}
const useUserStore = defineStore({
    id: 'user',
    state: (): State => ({
        token: getToken(),
        role: getRole(),
    }),
    actions: {
        async login() {
            this.setToken('this is token');
            this.setRole('admin');
            lauTo('/pages/home/main/main-page');
        },
        setToken(token: string) {
            this.token = token;
            setToken(token);
        },
        setRole(role: string) {
            this.role = role;
            setRole(role);
        },
    },
});

export default useUserStore;
