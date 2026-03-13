import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/Components/ui/tooltip';
import { Toaster } from '@/Components/ui/toaster';
import { Toaster as Sonner } from '@/Components/ui/sonner';

const appName = import.meta.env.VITE_APP_NAME || 'Halton Marine';
const queryClient = new QueryClient();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <TooltipProvider>
                        <App {...props} />
                        <Toaster />
                        <Sonner />
                    </TooltipProvider>
                </QueryClientProvider>
            </HelmetProvider>
        );
    },
    progress: {
        color: '#1970D2',
    },
});
