const express = require("express");
const cors = require("cors");
const user = require("./routes/userAuthentication");
const events = require("./routes/events");

const app = express();

app.use(express.static("uploads"));
app.use("/uploads", express.static("./uploads"));

app.use(express.json());
app.use(cors());

app.use("/user", user);
app.use("/events", events);
app.listen(8800, () => {
  console.log("Server started on port 8800");
});
