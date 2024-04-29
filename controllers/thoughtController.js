const Thought = require("../models/Thought");
const User = require("../models/User");

module.exports = {
  // Create New Thought
  async newThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const user = await User.findByIdAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: newThought._id } },
        { new: true }
      ).select("-__v");

      if (!user) {
        return res.status(404).json({ message: "User ID Not Found" });
      } else {
        return res
          .status(200)
          .json({ message: "Request Successful - New Thought", newThought });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - New Thought", details: err });
    }
  },

  // Get All Thoughts
  async getThoughts(req, res) {
    try {
      const getThoughts = await Thought.find().select("-__v");
      return res
        .status(200)
        .json({ message: "Request Successful - Get Thoughts", getThoughts });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Get Thoughts", details: err });
    }
  },

  // Get Thought By ID
  async getThoughtByID(req, res) {
    try {
      const thought = await Thought.findById({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        return res.status(200).json({
          message: "Request Successful - Get Thought By ID",
          thought,
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Get Thought By ID", details: err });
    }
  },

  // Update Thought By ID
  async updateThoughtByID(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $set: { thought: req.body.thought } },
        { new: true }
      ).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        return res.status(200).json({
          message: "Request Successful - Update Thought By ID",
          thought,
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Update Thought By ID", details: err });
    }
  },

  // Delete Thought By ID
  async deleteThoughtByID(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        return res.status(200).json({
          message: "Request Successful - Delete Thought By ID",
          thought,
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - Delete Thought By ID", details: err });
    }
  },
};
