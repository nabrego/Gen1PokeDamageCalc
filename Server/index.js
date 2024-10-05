const express = require("express");
const app = express();
const cors = require("cors");
const damCalcRoute = require("./routes/damCalcRoute");

app.use(express.json());
app.use(cors());
app.use('/', damCalcRoute);

app.listen(3001, () => {
    console.log("Server runs perfectly!");
});
