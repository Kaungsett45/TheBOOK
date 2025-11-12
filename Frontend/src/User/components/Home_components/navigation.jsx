import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Menu, X, User, Settings, Plus, LogOut, Heart, ShoppingCart } from 'lucide-react';
import Drop from './dropdown.jsx';
import Adsone from '../../../assets/icon/ads-one.png';

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

                  

                  
                    <div className="flex items-center gap-3">
                        {/* Auth Buttons */}
                        <div className="flex items-center gap-2">
                            <Link 
                                to="/login" 
                                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-200"
                            >
                                Login
                            </Link>
                          
                        </div>

                       
                    </div>
               

              
                        
                       
                  
                </div>

             
            </div>
        </nav>
    );
}
