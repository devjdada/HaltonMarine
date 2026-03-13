import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { FormEventHandler } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        logo: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.clients.store'));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Add Client</h2>}
        >
            <Head title="Add Client" />

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit} className="space-y-6 max-w-xl">
                        <div>
                            <Label htmlFor="name">Client Name</Label>
                            <Input
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                className="mt-1"
                            />
                            {errors.name && <div className="mt-1 text-sm text-red-600 font-medium">{errors.name}</div>}
                        </div>

                        <div>
                            <Label htmlFor="logo">Logo</Label>
                            <Input
                                id="logo"
                                type="file"
                                onChange={(e) => setData('logo', e.target.files ? e.target.files[0] : null)}
                                className="mt-1"
                                accept="image/*"
                            />
                            {errors.logo && <div className="mt-1 text-sm text-red-600 font-medium">{errors.logo}</div>}
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>
                            <Button variant="outline" asChild>
                                <Link href={route('admin.clients.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
