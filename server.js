const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, function () {

    console.log(`App is running on http://localhost:${PORT}`);
});