const mongoose = require("mongoose");
const modelTempSchema = new mongoose.Schema({
   temperature: {
      type: String,
   },
   speed: {
      type: String,
   },
   state: {
      type: Boolean,
   },
   last_update: {
      type: Date,
      default: Date.now(),
   },
});
const modelTemp = mongoose.model("tempModule", modelTempSchema);
module.exports = modelTemp;
