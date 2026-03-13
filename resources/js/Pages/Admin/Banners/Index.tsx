import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Film, Image as ImageIcon } from 'lucide-react';
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

interface Banner {
    id: number;
    page: string;
    title: string;
    subtitle: string;
    image: string;
    type: 'image' | 'video';
}

export default function Index({ banners }: { banners: Banner[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Banners</h2>}
        >
            <Head title="Banners" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.banners.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Banner
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Preview</TableHead>
                                <TableHead>Page</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {banners.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">No banners found.</TableCell>
                                </TableRow>
                            ) : (
                                banners.map((banner) => (
                                    <TableRow key={banner.id}>
                                        <TableCell>
                                            {banner.type === 'image' ? (
                                                <img src={`/storage/${banner.image}`} alt={banner.title} className="h-10 w-16 object-cover rounded" />
                                            ) : (
                                                <div className="h-10 w-16 bg-gray-200 rounded flex items-center justify-center">
                                                    <Film className="h-4 w-4 text-gray-400" />
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="capitalize">{banner.page}</TableCell>
                                        <TableCell className="font-medium">{banner.title}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="flex items-center gap-1 w-fit">
                                                {banner.type === 'video' ? <Film className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                                                {banner.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.banners.edit', banner.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.banners.destroy', banner.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this banner?')}
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
