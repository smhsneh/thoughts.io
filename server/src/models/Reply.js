import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["normal", "flagged", "hidden"],
      default: "normal",
    },
    confidence: Number,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model("Reply", replySchema);
