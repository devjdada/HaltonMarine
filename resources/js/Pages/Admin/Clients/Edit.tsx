import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { FormEventHandler } from 'react';

interface Client {
    id: number;
    name: string;
    logo: string;
}

export default function Edit({ client }: { client: Client }) {
    const { data, setData, post, processing, errors } = useForm({
        name: client.name,
        logo: null as File | null,
        _method: 'PATCH',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Use post with _method spoofing for file uploads with PATCH
        post(route('admin.clients.update', client.id));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit Client</h2>}
        >
            <Head title="Edit Client" />

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
                            <Label htmlFor="logo">Logo (leave empty to keep current)</Label>
                            {client.logo && (
                                <div className="mb-2">
                                    <p className="text-sm text-gray-500 mb-1">Current logo:</p>
                                    <img src={`/storage/${client.logo}`} alt={client.name} className="h-20 w-20 object-contain border rounded p-1" />
                                </div>
                            )}
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
                            <Button disabled={processing}>Update</Button>
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
