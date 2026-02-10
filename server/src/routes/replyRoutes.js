import express from "express";
import {
  createReply,
  getRepliesByPost,
  deleteReply,
  getFlaggedReplies,
  updateReplyStatus,
} from "../controllers/replyController.js";

const router = express.Router();

router.post("/", createReply);
router.get("/:postId", getRepliesByPost);
router.delete("/:id", deleteReply);

// admin routes
router.get("/flagged/all", getFlaggedReplies);
router.patch("/:id/status", updateReplyStatus);

import { getFlaggedReplies } from "../controllers/replyController.js";
router.get("/flagged", getFlaggedReplies);

export default router;