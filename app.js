const express = require("express");
const app = express();
const mysql = require("mysql");
const { join } = require("path");
const port = 4000;

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cars_db",
});

let oldCars = [
  {
    brand: "Ford",
    model: "model T",
    year: 1988,
    color: "yellow",
  },
  {
    brand: "Chevrolet",
    model: "Camero",
    year: 1992,
    color: "red",
  },
  {
    brand: "Dodge",
    model: "Challenger",
    year: 1995,
    color: "green",
  },
];

let sql = oldCars.map(
  (items) =>
    `"${items.brand}", "${items.model}", ${items.year}, "${items.color}"`
);
console.log(sql);

let insertOldCars = () => {
  sql.forEach((item) => {
    let query = `INSERT INTO cars(\`brand\`, \`model\`, \`year\`, \`color\`) VALUES(${item})
`;
    connection.query(query, (err, result) => {
      if (err) console.log(err);
      console.log(result);
    });
  });
};
insertOldCars();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
