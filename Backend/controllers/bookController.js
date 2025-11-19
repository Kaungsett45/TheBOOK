import Book from "../models/Books.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).json({
            message: "Books fetched successfully",
            books
        });
    } catch (error) {
        console.error("Get Books Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, description, image_url } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const newBook = await Book.create({
            user: req.user.id, 
            title,
            description,
            image_url,
            views_count: 0,
            like_count: 0,
            published_at: Date.now(),
        });

        res.status(201).json({
            message: "Book created successfully",
            book: newBook
        });
    } catch (error) {
        console.error("Create Book Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};



