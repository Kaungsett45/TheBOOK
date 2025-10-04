import React from 'react'
import { Quote, Star } from 'lucide-react'

export default function Homedesign() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Book Enthusiast",
            content: "TheBOOK has transformed how I organize my reading collection. It's intuitive and beautiful!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Literature Professor",
            content: "Perfect for managing my extensive academic library. The categorization feature is excellent.",
            rating: 5
        },
        {
            name: "Emma Davis",
            role: "Avid Reader",
            content: "I love discovering new books through the community. It's like having a personal librarian!",
            rating: 5
        }
    ];

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
            <div className="container mx-auto px-6">
                {/* Stats Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-lg mb-4">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        Trusted by 5,000+ Happy Readers
                    </div>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Join thousands of book lovers who have already transformed their reading experience
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            
                            <div className="relative mb-6">
                                <Quote className="w-8 h-8 text-white/30 absolute -top-2 -left-2" />
                                <p className="text-white/90 leading-relaxed pl-6">
                                    {testimonial.content}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-white font-semibold">{testimonial.name}</div>
                                    <div className="text-blue-200 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Your Reading Journey?
                    </h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join our community today and discover a better way to manage your book collection
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                            Start Free Today
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
