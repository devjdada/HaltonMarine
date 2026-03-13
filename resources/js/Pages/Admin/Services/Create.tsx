import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { FormEventHandler } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        image: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.services.store'));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Add Service</h2>}
        >
            <Head title="Add Service" />

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit} className="space-y-6 max-w-xl">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                                className="mt-1"
                            />
                            {errors.title && <div className="mt-1 text-sm text-red-600 font-medium">{errors.title}</div>}
                        </div>

                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                required
                                className="mt-1"
                            />
                            {errors.description && <div className="mt-1 text-sm text-red-600 font-medium">{errors.description}</div>}
                        </div>

                        <div>
                            <Label htmlFor="image">Image</Label>
                            <Input
                                id="image"
                                type="file"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                className="mt-1"
                                accept="image/*"
                            />
                            {errors.image && <div className="mt-1 text-sm text-red-600 font-medium">{errors.image}</div>}
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>
                            <Button variant="outline" asChild>
                                <Link href={route('admin.services.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
