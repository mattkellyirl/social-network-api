// const Reaction = require("../models/Reaction");
const Thought = require("../models/Thought");

module.exports = {
  // Create New Reaction
  async newReaction(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      if (!thought) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        const updatedThought = await Thought.updateOne(
          { _id: thought._id },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
        return res.status(200).json({
          message: "Request Successful - New Reaction",
          updatedThought,
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
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      ).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "Thought ID Not Found" });
      } else {
        return res.status(200).json({
          message: "Request Successful - Delete Reaction By ID",
          thought,
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
