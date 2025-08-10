const express = require("express");

 
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

let items = [];

app.get("/", (req, res) => {
  res.render("list", { ejes: items }); // pass ejes here
});

app.post("/", (req, res) => {
  const newItem = req.body.elel;
  if (newItem && newItem.trim() !== "") {
    items.push(newItem); // push the new task
  }
  res.redirect("/"); // will trigger GET above, sending ejes
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

