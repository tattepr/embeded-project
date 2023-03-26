const mongoose = require("mongoose");
const curtainModelSchema = mongoose.Schema({
   curtain_state: {
      type: Boolean,
   },
   last_update: {
      type: Date,
      default: Date.now(),
   },
});

const curtainModel = mongoose.model("curtainModule", curtainModelSchema);
module.exports = curtainModel;
