import express from "express";
import {
  createPost,
  getAllPosts,
} from "../controllers/postController.js";

const router = express.Router();
// Create 
router.post("/", createPost);
// Get 
router.get("/", getAllPosts);
export default router;