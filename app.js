const path = require("path");

const express = require("express");
const csrf = require("csurf");
const expressSession = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const createSessionConfig = require("./config/session");
const db = require("./data/database");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const checkAuthStatusMiddleware = require("./middlewares/check-auth");
const authRoutes = require("./routes/auth.routes");
const aboutRoutes = require("./routes/about.routes");
const homepageRoutes = require("./routes/homepage.routes");
const baseRoutes = require("./routes/base.routes");
const stratergyRoutes = require("./routes/stratergy.routes");
const { clear } = require("console");
const { start } = require("repl");

let port = process.env.PORT || 3000

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();
app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
app.use(homepageRoutes);
app.use(aboutRoutes);
app.use(stratergyRoutes);

app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

db.connectToDatabase()
  .then(function () {
    console.log(`Server is running on port ${port}`);
    app.listen(port); 
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });