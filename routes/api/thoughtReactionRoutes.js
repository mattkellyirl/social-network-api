const router = require("express").Router();

const {
  newThought,
  getThoughts,
  getThoughtByID,
  deleteThoughtByID,
  updateThoughtByID,
} = require("../../controllers/thoughtController");

const {
  newReaction,
  deleteReactionByID,
} = require("../../controllers/reactionController");

// Get all thoughts and add new thought
router.route("/").post(newThought).get(getThoughts);

// Get thought by ID, delete thought by ID, update thought by ID
router
  .route("/:thoughtId")
  .get(getThoughtByID)
  .delete(deleteThoughtByID)
  .put(updateThoughtByID);

// Add a new reaction for thought
router.route("/:thoughtId/reactions").post(newReaction);

// Delete reaction for thought
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReactionByID);

module.exports = router;
