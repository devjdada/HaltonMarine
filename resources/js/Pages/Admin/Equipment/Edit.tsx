import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { FormEventHandler } from 'react';

interface Equipment {
    id: number;
    name: string;
    specs: string;
    image: string;
    type: string;
}

export default function Edit({ equipment }: { equipment: Equipment }) {
    const { data, setData, post, processing, errors } = useForm({
        name: equipment.name,
        specs: equipment.specs || '',
        image: null as File | null,
        type: equipment.type,
        _method: 'PATCH',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.equipment.update', equipment.id));
    };

    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Edit Equipment</h2>}
        >
            <Head title="Edit Equipment" />

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <form onSubmit={submit} className="space-y-6 max-w-xl">
                        <div>
                            <Label htmlFor="name">Equipment Name</Label>
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
                            <Label htmlFor="type">Type</Label>
                            <Select 
                                value={data.type} 
                                onValueChange={(value) => setData('type', value)}
                            >
                                <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Core">Core Equipment</SelectItem>
                                    <SelectItem value="Extended">Extended Fleet (Partnership)</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.type && <div className="mt-1 text-sm text-red-600 font-medium">{errors.type}</div>}
                        </div>

                        <div>
                            <Label htmlFor="specs">Specifications / Description</Label>
                            <Textarea
                                id="specs"
                                value={data.specs}
                                onChange={(e) => setData('specs', e.target.value)}
                                className="mt-1"
                                rows={4}
                            />
                            {errors.specs && <div className="mt-1 text-sm text-red-600 font-medium">{errors.specs}</div>}
                        </div>

                        <div>
                            <Label htmlFor="image">Image (leave empty to keep current)</Label>
                            {equipment.image && (
                                <div className="mb-2">
                                    <p className="text-sm text-gray-500 mb-1">Current image:</p>
                                    <img src={`/storage/${equipment.image}`} alt={equipment.name} className="h-20 w-32 object-cover border rounded p-1" />
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
                                <Link href={route('admin.equipment.index')}>Cancel</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
