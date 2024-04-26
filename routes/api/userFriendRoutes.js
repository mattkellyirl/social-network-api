const router = require("express").Router();

const {
  addFriend,
  deleteFriend,
} = require("../../controllers/userFriendController");

// Add friend to user
router.route("/:userID").post(addFriend);

// Delete friend from user
router.delete("./userID/friends/:friendID")(deleteFriend);

module.exports = router;
