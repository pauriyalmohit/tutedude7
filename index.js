const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let items = [];

app.get("/", (req, res) => {
  res.render("list", { ejes: items });
});

app.post("/", (req, res) => {
  const newItem = req.body.elel;
  const priority = req.body.priority;
  if (newItem && newItem.trim() !== "") {
    items.unshift({task: newItem.trim(),priority});
  }
  res.redirect("/");
});
app.listen(9000, () => {
  console.log("Server started on http://localhost:9000");
});