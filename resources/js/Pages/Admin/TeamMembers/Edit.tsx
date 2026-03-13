import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { FormEventHandler } from 'react';

interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    bio: string;
}

export default function Edit({ teamMember }: { teamMember: TeamMember }) {
    const { data, setData, post, processing, errors } = useForm({
        name: teamMember.name,
        position: teamMember.position,
        bio: teamMember.bio || '',
        image: null as File | null,
        _method: 'PATCH',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.team-members.update', teamMember.id));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit Team Member</h2>}
        >
            <Head title="Edit Team Member" />

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
                            <Label htmlFor="image">Profile Image (leave empty to keep current)</Label>
                            {teamMember.image && (
                                <div className="mb-2">
                                    <p className="text-sm text-gray-500 mb-1">Current image:</p>
                                    <img src={`/storage/${teamMember.image}`} alt={teamMember.name} className="h-20 w-20 object-cover rounded-full border p-1" />
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
                                <Link href={route('admin.team-members.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
