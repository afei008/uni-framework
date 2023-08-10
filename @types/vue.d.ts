/** @format */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createApp } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $navTo: (url: string, params?: Record<string, unknown>) => void;
    }
}
