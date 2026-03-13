import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

interface Service {
    id: number;
    title: string;
    description: string;
    image: string | null;
}

export default function Index({ services }: { services: Service[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Services</h2>}
        >
            <Head title="Services" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.services.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Service
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {services.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No services found.</TableCell>
                                </TableRow>
                            ) : (
                                services.map((service) => (
                                    <TableRow key={service.id}>
                                        <TableCell className="font-medium">{service.title}</TableCell>
                                        <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                                        <TableCell>
                                            {service.image && (
                                                <img src={`/storage/${service.image}`} alt={service.title} className="h-10 w-10 object-cover rounded" />
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.services.edit', service.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.services.destroy', service.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this service?')}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
}
