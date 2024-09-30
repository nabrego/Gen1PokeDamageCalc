const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nickabrego1:qt96H7b45faYGRFd@pokemon.ldci5.mongodb.net/")

app.listen(3001, () => {
    console.log("Server Runs Perfectly");
});