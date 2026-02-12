import express from "express";
import {
  createReply,
  getRepliesByPost,
  deleteReply,
  updateReplyStatus,
  getFlaggedReplies
} from "../controllers/replyController.js";

const router = express.Router();

/* IMPORTANT: Static routes FIRST */
router.get("/flagged", getFlaggedReplies);

/* Then dynamic routes */
router.get("/:postId", getRepliesByPost);

router.post("/", createReply);
router.delete("/:id", deleteReply);
router.patch("/:id", updateReplyStatus);

export default router;