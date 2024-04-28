const router = require("express").Router();

const {
  addFriend,
  deleteFriend,
} = require("../../controllers/userFriendController");

// Add friend to user
router.route("/:userId").post(addFriend);

// Delete friend from user
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
