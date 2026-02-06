import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const { content, userId } = req.body;

    const post = await Post.create({
      content,
      author: userId,
    });

    const populatedPost = await post.populate("author", "username");

    res.status(201).json(populatedPost);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("author", "username")
    .sort({ createdAt: -1 });

  res.json(posts);
};

export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("author", "username");

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
};
