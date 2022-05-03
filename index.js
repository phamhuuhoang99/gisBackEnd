const express = require("express");

require("dotenv").config();
//----------------------------------------------------------------
const route = require("./routes/index");
//----------------------------------------------------------------
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

//--connect database ----


route(app);

const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`app listen at ${PORT}`);
});
