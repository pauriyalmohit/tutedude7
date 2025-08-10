const express = require("express");

 
const app = express(); 
app.set("view engine", "ejs");
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

app.listen(8000, () => {
  console.log("Server stared");
});



