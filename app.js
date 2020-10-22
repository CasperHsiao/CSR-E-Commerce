/**
 * Casper Hsiao
 * 08.12.2019
 * CSE 154 AC
 * This the app.js for my CSR E-Commerce Web app. This an API web service that outputs all the sneakers in
 * CSR sneaker retail. It provides the deatils of the sneaker including name, price, category,
 * and description. Furthermore, it ouputs the frequenctly answered questions and also stores the
 * feedback provided by the clients.
 */

"use strict";
const express = require("express");
const multer = require("multer");
const mysql = require("promise-mysql");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());
const SERVER_ERROR = 500;
const REQUEST_ERROR = 400;
const PORT_NUM = 8000;

/**
 * Stores the feedback from the client to the feedback table of CSR database.
 */
app.post("/csr/feedback", async (req, res) => {
  let feedback = req.body.feedback;
  res.type("text");
  let hasSent = false;
  if(!feedback) {
    res.status(400).send("Missing POST parameter: feedback");
    hasSent = true;
  }
  if (!hasSent) {
    try {
      await makeQuery("INSERT INTO feedback (feedback) VALUES('" + feedback + "')");
    } catch (err) {
      res.status(SERVER_ERROR).send("Something went on on the server, try again later.");
      hasSent = true;
    }
  }
  if (!hasSent) {
    res.send("Your feedback has been received. Thank You!");
  }
});

/**
 * Returns the a JSON response of all the sneaker names and its prices.
 */
app.get("/csr/sneaker/all", async (req, res) => {
  let sneakers;
  let hasSent = false;
  try {
    sneakers = await makeQuery("SELECT name, price FROM sneakers ORDER BY name;");
  } catch (err) {
    res.type("text");
    res.status(SERVER_ERROR).send("Something went on on the server, try again later.");
    hasSent = true;
  }
  if (!hasSent) {
    res.type("JSON");
    res.send(sneakers);
  }
});

/**
 * Returns the a JSON response of the details of a given sneaker name including its name, price,
 * and description.
 */
app.get("/csr/sneaker/:name", async (req, res) => {
  let name = req.params["name"];
  let sneaker;
  let hasSent = false;
  try {
    sneaker = await makeQuery("SELECT name, price, description FROM sneakers WHERE name='" +
      name + "'");
  } catch (err) {
    res.type("text");
    res.status(SERVER_ERROR).send("Something went on on the server, try again later.");
    hasSent = true;
  }
  if (!hasSent) {
    hasSent = handleRequestError(sneaker, hasSent, res, name);
  }
  if (!hasSent) {
    res.type("JSON");
    res.send(sneaker[0]);
  }
});

/**
 * Returns the a JSON response of all the sneakers in the given category including its name
 * and price.
 */
app.get("/csr/category/:category", async (req, res) => {
  let category = req.params["category"];
  let sneakers;
  let hasSent = false;
  try {
    sneakers = await makeQuery("SELECT name, price FROM sneakers WHERE category LIKE '%-" +
      category + "%'");
  } catch (err) {
    res.type("text");
    res.status(SERVER_ERROR).send("Something went on on the server, try again later.");
    hasSent = true;
  }
  if (!hasSent) {
    hasSent = handleRequestError(sneakers, hasSent, res, category);
  }
  if (!hasSent) {
    res.type("JSON");
    res.send(sneakers);
  }
});

/**
 * Returns the a JSON response of the five frequently asked question.
 */
app.get("/csr/faq", async (req, res) => {
  let result;
  let hasSent = false;
  try {
    result = await makeQuery("SELECT question, answer FROM faq;");
  } catch (err) {
    res.type("text");
    res.status(SERVER_ERROR).send("Something went on on the server, try again later.");
    hasSent = true;
  }
  if (!hasSent) {
    res.type("JSON");
    res.send(result);
  }
});

/**
 * Returns the response from the database with the given query.
 * @param {string} query - query given for the database.
 * @returns {object} - query response from the database.
 */
async function makeQuery(query) {
  let db;
  try {
    db = await getDB();
    let result = await db.query(query);
    return result;
  } catch (err) {
    throw err;
  }
  if (db) {
    db.end();
  }
}

/**
 * Handles request invalid query error and display user-friendly messgae if error occured.
 * @param {object} paths - query response from the database.
 * @param {boolean} hasSent - Checks if a response has been sent.
 * @param {object} res - The response.
 * @param {string} name - The name of the query.
 * @returns {boolean} - Returns true if the response is sent.
 */
function handleRequestError(paths, hasSent, res, name) {
  if (paths.length === 0 && !hasSent) {
    res.type("text");
    res.status(REQUEST_ERROR).send("No results found for " + name + ".");
    hasSent = true;
  }
  return hasSent;
}

/**
 * Creates connection with the CSR database.
 * @return {object} - the connection created with csrdb.
 */
async function getDB() {
  let database = await mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "csrdb"
  });
  return database;
}

const PORT = process.env.PORT || PORT_NUM;
app.listen(PORT);
