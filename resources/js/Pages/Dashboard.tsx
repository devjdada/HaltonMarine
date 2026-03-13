import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AdminLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Admin Dashboard" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-800 p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Services</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Manage company services.</p>
                </div>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-800 p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Projects</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">View and update project portfolio.</p>
                </div>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-800 p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Clients</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Maintain client and partner list.</p>
                </div>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-800 p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Equipment</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Manage fleet and equipment specs.</p>
                </div>
            </div>
        </AdminLayout>
    );
}
