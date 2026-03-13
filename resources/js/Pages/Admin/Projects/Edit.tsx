import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { FormEventHandler } from 'react';

interface Project {
    id: number;
    title: string;
    description: string | null;
    category: string | null;
    location: string | null;
    image: string | null;
}

export default function Edit({ project }: { project: Project }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PATCH',
        title: project.title,
        description: project.description || '',
        category: project.category || '',
        location: project.location || '',
        image: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.projects.update', project.id));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit Project</h2>}
        >
            <Head title="Edit Project" />

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
                                className="mt-1"
                                placeholder="Details about the project..."
                            />
                            {errors.description && <div className="mt-1 text-sm text-red-600 font-medium">{errors.description}</div>}
                        </div>

                        <div>
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                className="mt-1"
                            />
                            {errors.category && <div className="mt-1 text-sm text-red-600 font-medium">{errors.category}</div>}
                        </div>

                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                className="mt-1"
                            />
                            {errors.location && <div className="mt-1 text-sm text-red-600 font-medium">{errors.location}</div>}
                        </div>

                        <div>
                            <Label htmlFor="image">Image</Label>
                            {project.image && (
                                <div className="mt-2 mb-4">
                                    <img 
                                        src={`/storage/${project.image}`} 
                                        alt={project.title} 
                                        className="h-32 w-32 object-cover rounded-lg border dark:border-gray-700" 
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Current image</p>
                                </div>
                            )}
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
                            <Button disabled={processing}>Update</Button>
                            <Button variant="outline" asChild>
                                <Link href={route('admin.projects.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
