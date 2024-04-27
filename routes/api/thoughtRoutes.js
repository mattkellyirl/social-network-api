const router = require("express").Router();

const {
  newThought,
  getThoughts,
  getThoughtByID,
  deleteThoughtByID,
  updateThoughtByID,
} = require("../../controllers/thoughtController");

// Get all thoughts and add new thought
router.route("/").post(newThought).get(getThoughts);

// Get thought by ID, delete thought by ID, update thought by ID
router
  .route("/:thoughtId")
  .get(getThoughtByID)
  .delete(deleteThoughtByID)
  .put(updateThoughtByID);

module.exports = router;
