import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const { content, userId } = req.body;

    if (!content || !userId) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const user = await User.findById(userId);

    if (!user || user.isBlocked) {
      return res.status(403).json({ message: "User not allowed" });
    }

    const post = await Post.create({
      author: userId,
      content,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ isHidden: false })
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};