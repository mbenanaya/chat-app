import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#19d71f',
    },
});

Echo.private('messenger.1.2')
    .listen('MessageSent', (e) => {
        console.log(e.message);
    });

// Echo.join(`group_chat.1`)
//     .here((users) => {
//         console.log(users)
//     })
//     .joining((user) => {
//         console.log(user.name);
//     })
//     .leaving((user) => {
//         console.log(user.name);
//     })
//     .listen('GroupChatMessage', (e) => {
//         console.log(e);
//     })
//     .error((error) => {
//         console.error(error);
//     });