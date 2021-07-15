const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 9100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

let allGenre = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    name: "Fight Club",
    releaseYear: "1999",
    duration: "2h 19m",
    actors: "Brad Pitt , Edward Norton",
  },
];

//Define how your API handles a get or a post request.

app.get("/", function (request, response) {
  response.send("Hello 1om server");
});

app.post("/", function (request, response) {
  response.status(200).send({ message: "Data received" });
});

app.get("/allGenre", function (request, response) {
  response.send(allGenre);
});

app.post("/addGenre", function (request, response) {
  allGenre.push(request.body);
  response.status(200).send({ message: "Genre added!" });
});

app.post("/delete", function (request, response) {
  let id = allGenre.indexOf(request.body);
  allGenre.splice(id, 1);
  response.status(200).send({ message: "Genre deleted!" });
});

app.get("/favoriteGenre", function (request, response) {
  response.send(allGenre.filter((el) => el.favoriteGenre === true));
});

app.listen(PORT, function () {});
