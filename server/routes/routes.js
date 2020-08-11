const routes = require("express").Router();

const heroesList = require("../Heroes");
const heroesLogo = require("../HeroesLogo");

// constants to form regex
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

let regExp;
let pattern = "^";

// Method to filter the heroes list with each key stroke
const callHero = (input) => {
  pattern += regEx[input];
  regExp = new RegExp(pattern, "i");
  resultingHeroes = heroesList.filter((hero) => regExp.test(hero));
};

let resultingHeroes = Object.assign([], heroesList);

// API endpoint (route) to hit when front end is making it to the result
routes.post("/fetchHero", (req, res, next) => {
  const logo = heroesLogo[req.body.heroForRescue];
  res.status(200).json(logo);
});

// API endpoint (route) to hit when front end is requesting the list with the key stroke
routes.post("/fetchList", (req, res, next) => {
  if (req.body.keyed === null) {
    pattern = "^";
    resultingHeroes = Object.assign([], heroesList);
  }
  req.body.keyed && callHero(req.body.keyed);
  res.status(200).json(resultingHeroes);
});

module.exports = routes;
