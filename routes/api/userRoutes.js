const router = require("express").Router();

const {
  getUsers,
  getUserByID,
  createUser,
  deleteUserByID,
  updateUserByID,
} = require("../../controllers/userController");

// Get all users and add new user
router.route("/").get(getUsers).post(createUser);

// Get user by ID, update user by ID and delete user by ID
router
  .route("/:userID")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

module.exports = router;
