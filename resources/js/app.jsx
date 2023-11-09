import './bootstrap';
import '../css/app.css';
import "../css/nav.css"
import "../css/header.css"
import "../css/categories.css"
import "../css/products.css"
import "../css/shoplist.css"
import "../css/details.css"
import "../css/footer.css"
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: () => `MultiShop`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
