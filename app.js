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


//Middelware per rotte non esistenti (404)//
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

//Middelware per errori generici (500)//
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});