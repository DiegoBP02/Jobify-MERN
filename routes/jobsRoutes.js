import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";
import authenticateUser from "../middleware/auth.js";
import testUser from "../middleware/testUser.js";

router
  .route("/")
  .post(authenticateUser, testUser, createJob)
  .get(authenticateUser, getAllJobs);
router.route("/stats").get(authenticateUser, showStats);
router
  .route("/:id")
  .delete(authenticateUser, testUser, deleteJob)
  .patch(authenticateUser, testUser, updateJob);

export default router;
