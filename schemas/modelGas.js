const mongoose = require("mongoose");
const gasModelSchema = mongoose.Schema({
   detect_state: {
      type: Boolean,
   },
   last_update: {
      type: Date,
      default: Date.now(),
   },
});

const gasModel = mongoose.model("gasModule", gasModelSchema);
module.exports = gasModel;
