const express = require("express");
const path = require("path");

const apiController = require("./csv/apiController.js/index.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Serving React app Build
app.use(express.static(path.join(__dirname, "/client/build")));

// Api Controller
app.use("/api", apiController);

// Catch All Else for React Router Dom to handle via index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
    console.log(`> Server is running on port: [${port}]`);
});
