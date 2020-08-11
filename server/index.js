const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", routes);

const port = process.env.PORT || 2770;

app.listen(port, () => {
  console.log(`Listening on port 2770`);
});
