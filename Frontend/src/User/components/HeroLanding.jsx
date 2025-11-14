import { Link } from 'react-router-dom'
import { BookOpen, Users, Star, ArrowRight, Sparkles } from 'lucide-react'
import bookie from '../../assets/books/bookover.png'


function HeroLanding(){

    return(

          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                <Sparkles className="w-4 h-4" />
                                Welcome to TheBOOK
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Store Books,
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Buy What You Love</span>,
                                Showcase Your Collection
                            </h1>
                            
                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Discover, collect, and share your favorite books with a community of passionate readers. Build your digital library today.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                to="/login" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <BookOpen className="w-5 h-5" />
                                Get Started
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            
                            <Link 
                                to="/books" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-all duration-200 bg-white hover:bg-blue-50"
                            >
                                Browse Books
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">5K+</div>
                                <div className="text-sm text-gray-600">Happy Readers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">10K+</div>
                                <div className="text-sm text-gray-600">Books Shared</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">4.9</div>
                                <div className="text-sm text-gray-600 flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    Rating
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl transform rotate-6 opacity-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform -rotate-6 opacity-20"></div>
                            <img 
                                src={bookie} 
                                alt="Book Collection" 
                                className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

          
        </div>

    )
}



export default HeroLanding