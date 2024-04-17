const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/post", (req, res) => {
  res.send("Post request to the homepage");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
