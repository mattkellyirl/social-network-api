const router = require("express").Router();

const usersFriendsRoutes = require("./usersFriendsRoutes");
const thoughtsReactionsRoutes = require("./thoughtsReactionsRoutes");

router.use("/users", usersFriendsRoutes);
router.use("/thoughts", thoughtsReactionsRoutes);

module.exports = router;
