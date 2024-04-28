const Reaction = require("../models/Reaction");
const Thought = require("../models/Thought");

module.exports = {
  // Create New Reaction
  async newReaction(req, res) {
    try {
      const thoughtID = await Thought.findById(req.params.thoughtID).select(
        "-__v"
      );
      if (!thoughtID) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        await Thought.updateOne(
          { _id: thoughtID },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
        return res.status(200).json({
          message: "Request Successful - New Reaction",
          thoughtID,
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Request Failed - New Reaction", details: err });
    }
  },

  // Delete Reaction By ID
  async deleteReactionByID(req, res) {
    try {
      const thoughtID = await Thought.findById(req.params.thoughtID).select(
        "-__v"
      );
      if (!thoughtID) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        await Thought.updateOne(
          { _id: thoughtID },
          { $pull: { reactions: { _id: req.params.reactionID } } }
        );
        return res.status(200).json({
          message: "Request Successful - Delete Reaction By ID",
          thoughtID,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "Request Failed - Delete Reaction By ID",
        details: err,
      });
    }
  },
};
