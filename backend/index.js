const express = require("express");
const cors = require("cors");
const user = require("./routes/userAuthentication");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", user);
app.listen(8800, () => {
  console.log("Server started on port 8800");
});
