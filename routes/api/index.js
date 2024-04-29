const router = require("express").Router();

const userFriendRoutes = require("./userFriendRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactionRoutes");

router.use("/users", userFriendRoutes);
router.use("/thoughts", thoughtRoutes);
router.use("/reactions", reactionRoutes);

module.exports = router;
