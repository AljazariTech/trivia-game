const express = require("express");
const { dirname } = require("path");
const path = require("path");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});