import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { FormEventHandler } from 'react';

interface Banner {
    id: number;
    page: string;
    title: string;
    subtitle: string;
    image: string;
    type: 'image' | 'video';
}

export default function Edit({ banner }: { banner: Banner }) {
    const { data, setData, post, processing, errors } = useForm({
        page: banner.page,
        title: banner.title,
        subtitle: banner.subtitle || '',
        image: null as File | null,
        type: banner.type,
        _method: 'PATCH',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.banners.update', banner.id));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit Banner</h2>}
        >
            <Head title="Edit Banner" />

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit} className="space-y-6 max-w-xl">
                        <div>
                            <Label htmlFor="page">Page</Label>
                            <Select 
                                value={data.page} 
                                onValueChange={(value) => setData('page', value)}
                            >
                                <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select page" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="home">Home (Hero)</SelectItem>
                                    <SelectItem value="about">About</SelectItem>
                                    <SelectItem value="services">Services</SelectItem>
                                    <SelectItem value="projects">Projects</SelectItem>
                                    <SelectItem value="equipment">Equipment</SelectItem>
                                    <SelectItem value="contact">Contact</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.page && <div className="mt-1 text-sm text-red-600 font-medium">{errors.page}</div>}
                        </div>

                        <div>
                            <Label htmlFor="title">Banner Title</Label>
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
                            <Label htmlFor="subtitle">Subtitle / Description</Label>
                            <Input
                                id="subtitle"
                                value={data.subtitle}
                                onChange={(e) => setData('subtitle', e.target.value)}
                                className="mt-1"
                            />
                            {errors.subtitle && <div className="mt-1 text-sm text-red-600 font-medium">{errors.subtitle}</div>}
                        </div>

                        <div>
                            <Label htmlFor="type">Media Type</Label>
                            <Select 
                                value={data.type} 
                                onValueChange={(value) => setData('type', value as 'image' | 'video')}
                            >
                                <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="image">Image</SelectItem>
                                    <SelectItem value="video">Video</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.type && <div className="mt-1 text-sm text-red-600 font-medium">{errors.type}</div>}
                        </div>

                        <div>
                            <Label htmlFor="image">Media File (leave empty to keep current)</Label>
                            {banner.image && (
                                <div className="mb-2">
                                    <p className="text-sm text-gray-500 mb-1">Current file:</p>
                                    {banner.type === 'image' ? (
                                        <img src={`/storage/${banner.image}`} alt={banner.title} className="h-20 w-32 object-cover border rounded p-1" />
                                    ) : (
                                        <video src={`/storage/${banner.image}`} className="h-20 w-32 object-cover border rounded p-1" muted />
                                    )}
                                </div>
                            )}
                            <Input
                                id="image"
                                type="file"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                className="mt-1"
                                accept={data.type === 'video' ? 'video/*' : 'image/*'}
                            />
                            {errors.image && <div className="mt-1 text-sm text-red-600 font-medium">{errors.image}</div>}
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Update</Button>
                            <Button variant="outline" asChild>
                                <Link href={route('admin.banners.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
