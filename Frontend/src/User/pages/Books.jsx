import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Heart, Eye, Star } from 'lucide-react';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    // Mock data - replace with API call
    const mockBooks = [
        {
            id: 1,
            title: "The Great Gatsby",
            description: "A classic American novel about the Jazz Age and the American Dream.",
            categories: ["Fiction", "Classic"],
            author: "F. Scott Fitzgerald",
            rating: 4.5,
            views: 1250,
            likes: 89,
            coverImage: "/api/placeholder/300/400"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            description: "A gripping tale of racial injustice and childhood innocence in the American South.",
            categories: ["Fiction", "Drama"],
            author: "Harper Lee",
            rating: 4.8,
            views: 2100,
            likes: 156,
            coverImage: "/api/placeholder/300/400"
        },
        {
            id: 3,
            title: "1984",
            description: "A dystopian social science fiction novel about totalitarian control.",
            categories: ["Fiction", "Sci-Fi"],
            author: "George Orwell",
            rating: 4.6,
            views: 1890,
            likes: 134,
            coverImage: "/api/placeholder/300/400"
        },
        {
            id: 4,
            title: "Pride and Prejudice",
            description: "A romantic novel about manners, upbringing, and marriage in Georgian England.",
            categories: ["Romance", "Classic"],
            author: "Jane Austen",
            rating: 4.4,
            views: 980,
            likes: 78,
            coverImage: "/api/placeholder/300/400"
        }
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setBooks(mockBooks);
            setIsLoading(false);
        }, 1000);
    }, []);

    const categories = ['all', 'Fiction', 'Classic', 'Romance', 'Sci-Fi', 'Drama'];

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || book.categories.includes(selectedCategory);
        return matchesSearch && matchesCategory;
    });

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading books...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
              

                {/* Search and Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Discover books, authors..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"z />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            {/* Book Cover */}
                            <div className="relative h-64 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                                <BookOpen className="w-16 h-16 text-white opacity-50" />
                                <div className="absolute top-4 right-4">
                                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                                        <Heart className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Book Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{book.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{book.description}</p>

                                {/* Categories */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {book.categories.map(category => (
                                        <span key={category} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                            {category}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span>{book.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-4 h-4" />
                                            <span>{book.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-4 h-4" />
                                            <span>{book.likes}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredBooks.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}

                {/* Stats Footer */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600">
                        Showing {filteredBooks.length} of {books.length} books
                    </p>
                </div>
            </div>
        </div>
    );
}