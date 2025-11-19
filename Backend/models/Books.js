import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    views_count: {
      type: Number,
      default: 0,
    },
    like_count: {
      type: Number,
      default: 0,
    },
    image_url: {
      type: String,
      default: "",
    },
    published_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Book", bookSchema);