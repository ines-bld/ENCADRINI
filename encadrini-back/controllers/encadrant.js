var mysql = require("mysql");
const express = require('express');
const router = express.Router();


//const userMiddleware = require('../controllers/user');


var db = mysql.createConnection({
    connectionLimit: 100,
    port: process.env.DB_port,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});


router.get('/get_encadrant',(req, res) => {
db.query(
        "SELECT * FROM utilisateur WHERE poste ='Prof'",
        (err, result) => {
            // user does not exists
            if (err) {
            console.log('err')
        }
            else {
                res.send(result)}           
})})   
            
            

router.get('/get_outils',(req, res) => {
              db.query(
                      "SELECT * FROM outil" ,
                      (err, result) => {
                          // outil does not exists
                          if (err) {
                          console.log('err')
                      }
                          else {
                              res.send(result)}      
})})  

module.exports = router;
