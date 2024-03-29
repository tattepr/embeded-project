const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const temproute = require("./routers/temperature");
const lightroute = require("./routers/light");
var dotenv = require("dotenv");
dotenv.config();
const database = process.env.MONGOLAB_URI;
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3001;

mongoose
   .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      console.log("MongoDB Connected");
   })
   .catch((err) => {
      console.log("MongoDB not Connected" + err);
   });
const db = mongoose.connection;
db.on("error", (err) => {
   console.log("Connection Error: " + err);
});

app.use("/api/temp", temproute);
app.use("/api/light", lightroute);
app.use("/", (req, res) => {
   res.send("Hello");
});

app.listen(port, () => {
   console.log(`Server is running at port ${port}`);
});

//npx nodemon server.js
