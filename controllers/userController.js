const User = require("../models/User");

module.exports = {
  // Get All Users
  async getUsers(req, res) {
    try {
      const allUsers = await User.find();
      return res
        .status(200)
        .json({ message: "Request Successful - All Users", allUsers });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - All Users", details: err });
    }
  },

  // Get User By ID
  async getUserByID(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userID }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "User ID Not Found" });
      } else {
        return res
          .status(200)
          .json({ message: "Request Successful - User By ID", user });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - User By ID", details: err });
    }
  },

  // Update User By ID
  async updateUserByID(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userID });

      if (!user) {
        return res.status(404).json({ message: "User ID Not Found" });
      } else {
        return res
          .status(200)
          .json({ message: "Request Successful - Update User By ID", user });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Update User By ID", details: err });
    }
  },

  // Delete User By ID
  async deleteUserByID(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userID });

      if (!user) {
        return res.status(404).json({ message: "User ID Not Found" });
      } else {
        return res
          .status(200)
          .json({ message: "Request Successful - Delete User By ID", user });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Delete User By ID", details: err });
    }
  },
};