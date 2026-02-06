import express from "express";
import { createUser, getUserByUsername } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);                // SIGNUP
router.get("/:username", getUserByUsername); // LOGIN

export default router;