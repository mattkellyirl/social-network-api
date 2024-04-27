const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thought: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => {
        return createdAt.toISOString();
      },
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [Reaction],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
