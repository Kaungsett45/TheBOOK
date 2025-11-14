import React, { useState } from 'react';
import { BookOpen, User, Settings, Heart, Plus, LogOut, Home, Library } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function UserDashboard() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const navItems = [
       
        { label: 'My Books', path: '/my-books', icon: Library },
        { label: 'Favorites', path: '/favorites', icon: Heart },
        { label: 'Profile', path: '/profile', icon: User },
        { label: 'Settings', path: '/settings', icon: Settings },
    ];

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex">
            {/* Left Sidebar */}
            <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white shadow-xl transition-all duration-300 flex flex-col`}>
                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                                    isActiveLink(item.path)
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                            >
                                <Icon className={`w-5 h-5 ${isActiveLink(item.path) ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}`} />
                                {!isCollapsed && (
                                    <span className="font-medium">{item.label}</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}