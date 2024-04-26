const router = require("express").Router();

const userRoutes = require("./userRoutes");
const userFriendRoutes = require("./userFriendRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactionRoutes");

router.use("/users", userRoutes);
router.use("/friends", userFriendRoutes);
router.use("/thoughts", thoughtRoutes);
router.use("/reactions", reactionRoutes);

module.exports = router;
