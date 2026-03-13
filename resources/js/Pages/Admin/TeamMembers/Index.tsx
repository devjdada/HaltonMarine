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

interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
}

export default function Index({ teamMembers }: { teamMembers: TeamMember[] }) {
    return (
        <AdminLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Team Members</h2>}
        >
            <Head title="Team Members" />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href={route('admin.team-members.create')}>
                        <Plus className="mr-2 h-4 w-4" /> Add Team Member
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
                                <TableHead>Position</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teamMembers.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No team members found.</TableCell>
                                </TableRow>
                            ) : (
                                teamMembers.map((member) => (
                                    <TableRow key={member.id}>
                                        <TableCell>
                                            {member.image ? (
                                                <img src={`/storage/${member.image}`} alt={member.name} className="h-10 w-10 object-cover rounded-full" />
                                            ) : (
                                                <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-400">No Image</div>
                                            )}
                                        </TableCell>
                                        <TableCell className="font-medium">{member.name}</TableCell>
                                        <TableCell>{member.position}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="icon" asChild>
                                                    <Link href={route('admin.team-members.edit', member.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="icon" asChild>
                                                    <Link 
                                                        href={route('admin.team-members.destroy', member.id)} 
                                                        method="delete" 
                                                        as="button"
                                                        onBefore={() => confirm('Are you sure you want to delete this team member?')}
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
