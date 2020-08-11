const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// importing the routes created
const routes = require("./routes/routes");

const app = express();

// npm package to automatically load the logs in the console
app.use(morgan("common"));
// npm package to prevent some header based attacks
app.use(helmet());
// to parse body from the request
app.use(express.json());
// npm package to control the cross origin
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routes);

// port that the backed server is listening on
const port = process.env.PORT || 2770;

app.listen(port, () => {
  console.log(`Listening on port 2770`);
});
