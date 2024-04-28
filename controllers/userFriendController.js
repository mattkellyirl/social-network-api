const User = require("../models/User");

module.exports = {
  // Add Friend
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userID },
        { $set: { friends: req.body.friendID } },
        { runValidators: true, new: true }
      ).select("-__v");

      if (!user) {
        return res.status(404).json({ message: "User ID Not Found" });
      } else {
        return res
          .status(200)
          .json({ message: "Request Successful - Add Friend", user });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Add Friend", details: err });
    }
  },

  // Delete Friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userID },
        { $pull: { friends: req.params.friendID } },
        { runValidators: true, new: true }
      ).select("-__v");

      if (!user) {
        return res.status(404).json({ message: "User ID Not Found" });
      } else {
        return res
          .status(200)
          .json({ message: "Request Successful - Delete Friend", user });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Delete Friend", details: err });
    }
  },
};
