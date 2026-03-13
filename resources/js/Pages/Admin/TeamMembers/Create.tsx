import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { FormEventHandler } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        position: '',
        image: null as File | null,
        bio: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.team-members.store'));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Add Team Member</h2>}
        >
            <Head title="Add Team Member" />

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit} className="space-y-6 max-w-xl">
                        <div>
                            <Label htmlFor="name">Name</Label>
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
                            <Label htmlFor="position">Position</Label>
                            <Input
                                id="position"
                                value={data.position}
                                onChange={(e) => setData('position', e.target.value)}
                                required
                                className="mt-1"
                            />
                            {errors.position && <div className="mt-1 text-sm text-red-600 font-medium">{errors.position}</div>}
                        </div>

                        <div>
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                                className="mt-1"
                                rows={4}
                            />
                            {errors.bio && <div className="mt-1 text-sm text-red-600 font-medium">{errors.bio}</div>}
                        </div>

                        <div>
                            <Label htmlFor="image">Profile Image</Label>
                            <Input
                                id="image"
                                type="file"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                className="mt-1"
                                accept="image/*"
                                required
                            />
                            {errors.image && <div className="mt-1 text-sm text-red-600 font-medium">{errors.image}</div>}
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>
                            <Button variant="outline" asChild>
                                <Link href={route('admin.team-members.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
