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

interface Client {
    id: number;
    name: string;
    logo: string;
}

export default function Index({ clients }: { clients: Client[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Clients</h2>}
        >
            <Head title="Clients" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.clients.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Client
                    </Link>
                </Button>
            </div>

            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Logo</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clients.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={3} className="text-center">No clients found.</TableCell>
                                </TableRow>
                            ) : (
                                clients.map((client) => (
                                    <TableRow key={client.id}>
                                        <TableCell>
                                            {client.logo ? (
                                                <img src={`/storage/${client.logo}`} alt={client.name} className="h-10 w-10 object-contain" />
                                            ) : (
                                                <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Logo</div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">{client.name}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.clients.edit', client.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.clients.destroy', client.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this client?')}
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
