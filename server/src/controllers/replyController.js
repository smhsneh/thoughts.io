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

    await Post.findByIdAndUpdate(postId, {
      $inc: { repliesCount: 1 },
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
    const { postId } = req.params;

    const replies = await Reply.find({ post: postId })
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
    const reply = await Reply.findById(req.params.id);

    if (!reply) {
      return res.status(404).json({ message: "Reply not found" });
    }

    await reply.deleteOne();
    res.json({ message: "Reply deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};