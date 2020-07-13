let express = require("express");

let app = express();
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8080;

let db = require("./models");
db.Component.sync();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// let exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

});

