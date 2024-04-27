const router = require("express").Router();

const {
  addFriend,
  deleteFriend,
} = require("../../controllers/userFriendController");

// Add friend to user
router.route("/:userId").post(addFriend);

// Delete friend from user
router.delete("./:userId/friends/:friendId")(deleteFriend);

module.exports = router;
