import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2, BadgeCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";

interface Equipment {
    id: number;
    name: string;
    specs: string;
    image: string;
    type: 'Core' | 'Extended';
}

export default function Index({ equipment }: { equipment: Equipment[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Equipment</h2>}
        >
            <Head title="Equipment" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.equipment.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Equipment
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Specs</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {equipment.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">No equipment found.</TableCell>
                                </TableRow>
                            ) : (
                                equipment.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            {item.image ? (
                                                <img src={`/storage/${item.image}`} alt={item.name} className="h-10 w-16 object-cover rounded" />
                                            ) : (
                                                <div className="h-10 w-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Image</div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell>
                                            <Badge variant={item.type === 'Core' ? 'default' : 'secondary'}>
                                                {item.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="max-w-xs truncate">{item.specs}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.equipment.edit', item.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.equipment.destroy', item.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this equipment?')}
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
