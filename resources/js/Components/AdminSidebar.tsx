import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    Briefcase, 
    FolderKanban, 
    Users, 
    Truck, 
    LogOut,
    Home,
    UserCheck,
    Image,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const { url } = usePage();

    const navigation = [
        { name: 'Dashboard', href: route('admin.dashboard'), icon: LayoutDashboard },
        { name: 'Services', href: route('admin.services.index'), icon: Briefcase },
        { name: 'Projects', href: route('admin.projects.index'), icon: FolderKanban },
        { name: 'Clients', href: route('admin.clients.index'), icon: Users },
        { name: 'Equipment', href: route('admin.equipment.index'), icon: Truck },
        { name: 'Team', href: route('admin.team-members.index'), icon: UserCheck },
        { name: 'Gallery', href: route('admin.galleries.index'), icon: Image },
        { name: 'Banners', href: route('admin.banners.index'), icon: Image },
        { name: 'Settings', href: route('admin.settings.index'), icon: Settings },
    ];

    return (
        <div className="flex h-full min-h-screen w-64 flex-col bg-gray-900 text-white">
            <div className="flex h-16 items-center justify-center border-b border-gray-800 px-4">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-primary">Halton Marine</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-2">
                    {navigation.map((item) => {
                        const isActive = url.startsWith(item.href.replace(window.location.origin, ''));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    isActive 
                                        ? "bg-primary text-white" 
                                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                )}
                            >
                                <item.icon className={cn("mr-3 h-5 w-5 flex-shrink-0", isActive ? "text-white" : "text-gray-400 group-hover:text-white")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="border-t border-gray-800 p-4">
                <Link
                    href={route('home')}
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                    <Home className="mr-3 h-5 w-5 text-gray-400" />
                    Back to Site
                </Link>
                <Link
                    method="post"
                    href={route('logout')}
                    as="button"
                    className="mt-1 flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                    <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
