const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');
const cors = require("cors");
const damCalcRoute = require("./routes/damCalcRoute");

app.use(express.json());
app.use(cors());
app.use('/', damCalcRoute);

mongoose.connect("mongodb+srv://nickabrego1:qt96H7b45faYGRFd@pokemon.ldci5.mongodb.net/Pokemon?retryWrites=true&w=majority&appName=Pokemon");

app.get("/getUsers", (req, res) =>{
    UserModel.find({})
    .then(docs => {
        console.log(docs);
        res.json(docs);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("Server runs perfectly!");
});
