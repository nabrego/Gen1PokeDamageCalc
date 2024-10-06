const express = require("express");
const app = express();
const cors = require("cors");
const damCalcRoute = require("./routes/damCalcRoute");

app.use(express.json());
app.use(cors(
    {
        origin: ["https://gen1-poke-damage-calc-ro5w.vercel.app"],
        methods: ["POST", "GET"]
    }
));
app.use('/', damCalcRoute);

module.exports = app;
