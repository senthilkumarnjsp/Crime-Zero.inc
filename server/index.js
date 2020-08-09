const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const heroesList = require("./Heroes");

const app = express();

const regEx = {
  "1": "[@.?]",
  "2": "[abc]",
  "3": "[def]",
  "4": "[ghi]",
  "5": "[jkl]",
  "6": "[mno]",
  "7": "[pqrs]",
  "8": "[tuv]",
  "9": "[wxyz]",
};

app.use(morgan("common"));
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const formRegex = (char) => {
  return regEx[char];
};

let pattern = "^";
let regExp;
let resultingHeroes = Object.assign([], heroesList);
// console.log(resultingHeroes);

const callHero = (input) => {
  //   console.log(input);
  pattern += formRegex(input);
  regExp = new RegExp(pattern, "i");
  console.log(regExp);
  resultingHeroes = heroesList.filter((hero) => regExp.test(hero));
  console.log(`The resulting array is ${resultingHeroes}`);
  //   console.log(input, pattern);
};

const port = process.env.PORT || 2770;

app.get("/", (req, res) => {
  res.json("Welcome to our App").status(200);
});

app.post("/api/fetchList", (req, res, next) => {
  // console.log(`The data received ${JSON.parse(req.body.keyed)}`);
  if (req.body.keyed === null) {
    pattern = "^";
    resultingHeroes = Object.assign([], heroesList);
  }
  req.body.keyed && callHero(req.body.keyed);
  // callHero(res.body)
  res.status(200).json(resultingHeroes);
});

app.listen(port, () => {
  console.log(`Listening on port 2770`);
});
