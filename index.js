const express = require("express");
const cors = require("cors");
require("dotenv").config();
//----------------------------------------------------------------
const route = require("./routes/index");
const db = require("./utils/db");
//----------------------------------------------------------------
const app = express();
const logger = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors());
app.use(logger("dev"));

//--connect database ----
db.client.connect(err => {
  if (err) console.log(err);
  else console.log(`connected to database ${process.env.DB_NAME} !!!`);
});

route(app);

const PORT = process.env.API_PORT;
app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log(`app listen at ${PORT}`);
});
