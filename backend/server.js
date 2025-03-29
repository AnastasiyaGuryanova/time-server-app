const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  const currentTime = new Date().toLocaleString();
  console.log(`Time requested: ${currentTime}`);
  res.json({
    time: currentTime,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
