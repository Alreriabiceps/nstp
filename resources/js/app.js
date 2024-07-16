import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { faDownload, faEye, faFileUpload, faFilter, faListDots, faPencil, faPlus, faSignIn, faSignOut, faTrash } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createInertiaApp } from '@inertiajs/vue3';
import { library } from '@fortawesome/fontawesome-svg-core'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

library.add(faPencil, faTrash, faEye, faSignIn, faSignOut, faDownload, faFileUpload, faPlus, faFilter, faListDots)

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
        .component('font-awesome-icon', FontAwesomeIcon)
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
