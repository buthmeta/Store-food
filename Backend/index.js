import express from "express";
import cors from "cors";
import mysql, { createConnection } from "mysql";

const app = express();
app.use(cors());
app.use(express.json());

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Testing",
});

// app.post("", (req, res) => {
//   const sql =
//     "INSERT INTO `Customer`( `Name`, `Email`, `Phone`, `Address`) VALUES (?)";
//   const value = [
//     req.body.name,
//     req.body.email,
//     req.body.phone,
//     req.body.address,
//   ];

//   db.query(sql, [value], (err, data) => {
//     if (err) res.json({ Message: "Error Inside" });
//     return res.json(data);
//   });
// });

app.post("", (req, res) => {
  const sql =
    "INSERT INTO `Customer`( `Name`, `Email`, `Phone`, `Address`) VALUES (?)";
  const value = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address,
  ];

  db.query(sql, [value], (err, data) => {
    if (err) res.json({ Message: "Error Inside" });
    return res.json(data);
  });
});

app.listen(8085, () => {
  console.log("http://localhost:8085");
});
