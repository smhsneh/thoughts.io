const mongoose = require("mongoose");

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
      trim: true,
      maxlength: 300,
    },

    // ML-related fields
    category: {
      type: String,
      default: "normal",
    },

    confidence: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["normal", "flagged", "hidden"],
      default: "normal",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reply", replySchema);