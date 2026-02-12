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
router.get("/flagged/all", getFlaggedReplies);
router.get("/:postId", getRepliesByPost);
router.delete("/:id", deleteReply);
router.patch("/:id/status", updateReplyStatus);


export default router;