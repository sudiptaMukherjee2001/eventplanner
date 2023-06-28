const express = require("express");
const router = express.Router();
const db = require("../db/config.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    //console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const query = `SELECT * FROM public.events`;
    const data = await db.query(query);
    const result = data.rows;
    return res.send(result).status(200);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/add", upload.single("file"), async (req, res) => {
  try {
    const values = [
      req.body.userId,
      req.body.eventName,
      req.body.location,
      req.body.date,
      req.body.time,
      req.body.price,
      req.body.seats,
      req.body.type,
      req.file.path,
    ];
    const query = `INSERT INTO public.events (user_id,name,location,date,time,price,type,seats,imageUrl)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`;
    await db.query(query, values);
    res.status(200).json({ message: "Succesfully added new event." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

module.exports = router;
