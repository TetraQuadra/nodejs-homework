const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    })
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
