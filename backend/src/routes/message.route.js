import express from "express"
import { protectRoute } from "../middleware/auth.middleware";
import { getMessages, getUserForSidebar } from "../controllers/message.controller";

const router =express.Router();


router.get("/users",protectRoute,getUserForSidebar)
router.get("/:id",protectRoute,getMessages)

export default router;