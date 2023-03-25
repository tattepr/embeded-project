const mongoose = require("mongoose");
const lightModelSchema = mongoose.Schema({
   room1_state: {
      type: Boolean,
   },
   room2_state: {
      type: Boolean,
   },
   room3_state: {
      type: Boolean,
   },
   last_update: {
      type: Date,
      default: Date.now(),
   },
});

const lightModel = mongoose.model("lightModule", lightModelSchema);
module.exports = lightModel;
