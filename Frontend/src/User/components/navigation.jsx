import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Menu, X, User, Settings, Plus, LogOut, Heart, ShoppingCart } from 'lucide-react';
import Drop from './dropdown.jsx';
import Adsone from '../assets/icon/ads-one.png';

export default function navigation() {
    const wrapperRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    const navLinks = [
        { label: 'Home', path: '/', icon: BookOpen },
        { label: 'Books', path: '/books', icon: BookOpen },
        { label: 'Create', path: '/create', icon: Plus },
    ];

    return (
        <nav className="w-full bg-white backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                            <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            TheBOOK
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                                        isActiveLink(link.path)
                                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Search Bar */}
                 

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Quick Actions - Desktop */}
                        <div className="hidden md:flex items-center gap-2">
                            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                                <Heart className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                                <ShoppingCart className="w-5 h-5" />
                            </button>
                        </div>

                        {/* User Menu */}
                        <div className="relative" ref={wrapperRef}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
                            >
                                <img
                                    src={Adsone}
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                                />
                                <span className="hidden md:block text-sm font-medium text-gray-700">Account</span>
                            </button>
                            {isOpen && <Drop />}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
                        {/* Mobile Search */}
                  
                        
                        {/* Mobile Navigation Links */}
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                        isActiveLink(link.path)
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {link.label}
                                </Link>
                            );
                        })}
                        
                        {/* Mobile Quick Actions */}
                        <div className="flex items-center gap-2 px-4 pt-2">
                            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                                <Heart className="w-4 h-4" />
                                Favorites
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                                <ShoppingCart className="w-4 h-4" />
                                Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
