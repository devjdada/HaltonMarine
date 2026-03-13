import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

interface Project {
    id: number;
    title: string;
    category: string | null;
    location: string | null;
    image: string | null;
}

export default function Index({ projects }: { projects: Project[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Projects</h2>}
        >
            <Head title="Projects" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.projects.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No projects found.</TableCell>
                                </TableRow>
                            ) : (
                                projects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell className="font-medium">{project.title}</TableCell>
                                        <TableCell>{project.category}</TableCell>
                                        <TableCell>{project.location}</TableCell>
                                        <TableCell>
                                            {project.image && (
                                                <img src={`/storage/${project.image}`} alt={project.title} className="h-10 w-10 object-cover rounded" />
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.projects.edit', project.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.projects.destroy', project.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this project?')}
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
