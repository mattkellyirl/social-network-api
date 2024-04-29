const router = require("express").Router();

const userFriendRoutes = require("./userFriendRoutes");
const thoughtReactionRoutes = require("./thoughtReactionRoutes");
// const reactionRoutes = require("./reactionRoutes");

router.use("/users", userFriendRoutes);
router.use("/thoughts", thoughtReactionRoutes);
// router.use("/reactions", reactionRoutes);

module.exports = router;
