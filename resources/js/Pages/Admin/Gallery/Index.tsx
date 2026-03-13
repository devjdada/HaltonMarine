import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Image, Video } from 'lucide-react';
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

interface Gallery {
    id: number;
    title: string | null;
    description: string | null;
    file_path: string;
    type: 'image' | 'video';
    is_active: boolean;
}

export default function Index({ galleries }: { galleries: Gallery[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Gallery</h2>}
        >
            <Head title="Gallery" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.galleries.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Item
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Preview</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {galleries.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">No gallery items found.</TableCell>
                                </TableRow>
                            ) : (
                                galleries.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <div className="h-16 w-16 overflow-hidden rounded border dark:border-gray-700">
                                                {item.type === 'image' ? (
                                                    <img 
                                                        src={`/storage/${item.file_path}`} 
                                                        alt={item.title || ''} 
                                                        className="h-full w-full object-cover" 
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400">
                                                        <Video className="h-6 w-6" />
                                                    </div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {item.title || 'Untitled'}
                                            {item.description && (
                                                <p className="text-xs text-gray-500 max-w-xs truncate">{item.description}</p>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="capitalize">
                                                {item.type === 'image' ? <Image className="mr-1 h-3 w-3" /> : <Video className="mr-1 h-3 w-3" />}
                                                {item.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={item.is_active ? 'secondary' : 'outline'}>
                                                {item.is_active ? 'Active' : 'Inactive'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.galleries.edit', item.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.galleries.destroy', item.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this item?')}
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
