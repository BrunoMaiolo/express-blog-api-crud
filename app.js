const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());





app.get("/", (req, res) => {
  res.send("Home!");
});

const docsRouter = require("./routers/docs.js");

app.use("/posts", docsRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});