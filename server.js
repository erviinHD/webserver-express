const express = require("express");
const hbs = require("hbs");
require('./hbs/helpers')
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Express HBS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



app.get("/", (req, res) => {
  res.render("home", {
    name: "Ervin cabascango",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
});
