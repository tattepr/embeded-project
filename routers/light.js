const express = require("express");
const router = express.Router();

const lightModel = require("../schemas/modelLight");

router.post("/update", async (request, response) => {
   try {
      let module = await lightModel.findOne();
      if (module == null) {
         const newModule = lightModel({
            room1_state: request.body.room1_state,
            room2_state: request.body.room2_state,
            room3_state: request.body.room3_state,
         });
         await newModule.save();
         response.send("success create");
      } else {
         await lightModel.findOneAndUpdate(
            {},
            {
               room1_state: request.body.room1_state,
               room2_state: request.body.room2_state,
               room3_state: request.body.room3_state,
               last_update: Date.now(),
            }
         );
         response.send("success update");
      }
   } catch (e) {
      response.status(500).send({ message: e.message });
   }
});

module.exports = router;
