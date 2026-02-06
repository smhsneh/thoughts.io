import express from "express";
import {
  createReply,
  getRepliesByPost,
  deleteReply,
} from "../controllers/replyController.js";

const router = express.Router();

router.post("/", createReply);
router.get("/:postId", getRepliesByPost);
router.delete("/:id", deleteReply); 

export default router;