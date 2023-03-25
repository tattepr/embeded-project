const express = require("express");
const router = express.Router();

const modelTemp = require("../schemas/modelTemp");

// router.post("/update", async (request, response) => {
//    try {
//       const Pond = modelTemp({
//          temperature: request.body.temperature,
//          speed: request.body.speed,
//          state: request.body.state,
//       });

//       await Pond.save();
//       response.send("success");
//    } catch (e) {
//       response.status(500).send({ message: e.message });
//    }
// });

router.post("/update", async (request, response) => {
   try {
      let module = await modelTemp.findOne();
      if (module == null) {
         const newModule = modelTemp({
            temperature: request.body.temperature,
            speed: request.body.speed,
            state: request.body.state,
         });
         await newModule.save();
         response.send("success create");
      } else {
         await modelTemp.findOneAndUpdate(
            {},
            {
               temperature: request.body.temperature,
               speed: request.body.speed,
               state: request.body.state,
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
