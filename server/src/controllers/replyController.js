import Reply from "../models/Reply.js";
import Post from "../models/Post.js";

export const createReply = async (req, res) => {
  try {
    const { postId, userId, content } = req.body;

    const reply = await Reply.create({
      post: postId,
      author: userId,
      content,
    });

    const populatedReply = await reply.populate("author", "username");

    res.status(201).json(populatedReply);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create reply" });
  }
};

export const getRepliesByPost = async (req, res) => {
  try {
    const replies = await Reply.find({ post: req.params.postId })
      .populate("author", "username")
      .sort({ createdAt: 1 });

    res.json(replies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch replies" });
  }
};

export const deleteReply = async (req, res) => {
  try {
    await Reply.findByIdAndDelete(req.params.id);
    res.json({ message: "Reply deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete failed" });
  }
};

export const updateReplyStatus = async (req, res) => {
  try {
    const { status, isFlagged } = req.body;

    const reply = await Reply.findByIdAndUpdate(
      req.params.id,
      { status, isFlagged },
      { new: true }
    );

    res.json(reply);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
};

export const getFlaggedReplies = async (req, res) => {
  try {
    const replies = await Reply.find({ isFlagged: true })
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.json(replies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch flagged replies" });
  }
};