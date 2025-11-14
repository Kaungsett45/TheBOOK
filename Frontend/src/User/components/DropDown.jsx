import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Plus, CreditCard, LogOut, User, Bell } from 'lucide-react';

export default function dropdown() {
    const menuItems = [
        { label: 'Profile', to: '/profile', icon: User },
        { label: 'Settings', to: '/setting', icon: Settings },
        { label: 'Create Book', to: '/create', icon: Plus },
        { label: 'Notifications', to: '/notifications', icon: Bell },
        { label: 'Payment', to: '/payment', icon: CreditCard },
        { label: 'Log out', to: '/logout', icon: LogOut, divider: true }
    ];

    return (
        <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
            {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index}>
                        {item.divider && <div className="border-t border-gray-100 my-2" />}
                        <Link
                            to={item.to}
                            className={`flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${
                                item.label === 'Log out' ? 'text-red-600 hover:bg-red-50 hover:text-red-700' : ''
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
