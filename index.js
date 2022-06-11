const express = require("express");
const { create } = require("express-handlebars");
let app = express();
const path = require("path"); 
require("dotenv").config();

const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
});

// Register `hbs.engine` with the Express app.
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homePage = require("./routes/homePage");
const productPage = require('./routes/product')
const adminPage = require("./routes/adminPanel")


app.use("/", homePage);
app.use('/products/', productPage)

try {
  const port = normalizePort(process.env.port || 5000);
  app.listen(port, () => {
    console.log(`Server ${port} port bilan eshitiliytapti`);
  });
} catch (error) {
  console.log(error);
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
