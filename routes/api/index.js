const router = require("express").Router();

const userFriendRoutes = require("./userFriendRoutes");
const thoughtReactionRoutes = require("./thoughtReactionRoutes");

router.use("/users", userFriendRoutes);
router.use("/thoughts", thoughtReactionRoutes);

module.exports = router;
