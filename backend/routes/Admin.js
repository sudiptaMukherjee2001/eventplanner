const express = require("express");
const router = express.Router();
const db = require("../db/config.js");

router.patch("/:event_id", async (req, res) => {
    //Approve
    try {
        const values = [1, req.params.event_id];
        const query = `UPDATE public.events SET approved = $1 WHERE event_id = $2`;
        await db.query(query, values);
        return res.status(200);
    } catch (er) {
        console.log(er);
        res.status(500).json({ er: er });
    }
});

router.delete("/:event_id", async (req, res) => {
    //Approve
    try {
        const values = [req.params.event_id];
        const query = `DELETE FROM public.events
        WHERE event_id=$1`;
        await db.query(query, values);
        return res.status(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});

module.exports = router;