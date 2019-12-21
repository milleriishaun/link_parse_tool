const express = require("express");
const app = express();

app.listen(8080, () => console.log("listening on port 3000"));
app.use(express.static(__dirname));
