import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },

    //  ML READY FIELDS
    label: {
      type: String,
      default: null,
    },

    confidence: {
      type: Number,
      default: 0,
    },

    severity: {
      type: String,
      default: null,
    },

    isFlagged: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["normal", "hidden"],
      default: "normal",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reply", replySchema);