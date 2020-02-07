const express = require("express");
const path = require("path");

const apiController = require("./csv/apiController.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(express.static(path.join(__dirname, "/client/build")));

// Api Controller
app.use("/api", apiController);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
    console.log(`> Server is running on port: [${port}]`);
});
