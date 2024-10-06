const express = require("express");
const cors = require("cors");
const damCalcRoute = require("./routes/damCalcRoute");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://gen1-poke-damage-calc-ro5w.vercel.app"],
    methods: ["POST", "GET"]
}));

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.use('/', damCalcRoute);

module.exports = app;
