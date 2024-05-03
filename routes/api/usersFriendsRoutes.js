const router = require("express").Router();

const {
  getUsers,
  getUserByID,
  newUser,
  updateUserByID,
  deleteUserByID,
} = require("../../controllers/userController");

const {
  addFriend,
  deleteFriend,
} = require("../../controllers/userFriendController");

// Get all users and add new user
router.route("/").get(getUsers).post(newUser);

// Get user by ID, update user by ID and delete user by ID
router
  .route("/:userId")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);

// Add friend to user
router.route("/:userId/friends").post(addFriend);

// Delete friend from user
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
