import Sidebar from '@/Components/AdminSidebar';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function AdminLayout({ children, header }: { children: ReactNode; header?: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar />
            <div className="flex-1">
                {header && (
                    <header className="bg-white shadow dark:bg-gray-800">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                <main className="p-6">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
