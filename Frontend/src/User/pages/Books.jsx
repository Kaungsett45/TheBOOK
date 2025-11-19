import { useEffect, useState } from "react";
import api from "../../axios/axios"; 
import { BookOpen, Search, Filter, Star, Eye, Heart, User } from "lucide-react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/books");
        setBooks(res.data.books || []);
      } catch (error) {
        console.error("Fetch Books Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === "all" || book.genre === selectedGenre)
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-blue-800 font-medium">Loading your library...</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    
      {/* Search & Filter */}
      <div className="max-w-6xl mx-auto px-0 py-4">
      
        {/* Books Grid */}
        {filteredBooks.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-24 h-24 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-blue-900 mb-2">No Books Found</h3>
            <p className="text-blue-700">Try adjusting your search or explore different genres</p>
          </div>
        ) : (
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredBooks.map((book) => (
    <div
      key={book._id}
      className="bg-white rounded-xl shadow hover:shadow-lg transition p-3"
    >
      {/* Image */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full h-full object-cover"
        />

        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full shadow">
          <Heart className="w-3 h-3 text-red-500" />
        </button>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mt-3 line-clamp-2">
        {book.title}
      </h3>

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {book.views_count || 0}
        </div>
        <div className="flex items-center gap-1">
          <Heart className="w-3 h-3 text-red-500" />
          {book.like_count || 0}
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-3 py-3 font-semibold text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View
      </button>
    </div>
  ))}
</div>


        )}

        {/* Stats Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">{filteredBooks.length} Books Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
