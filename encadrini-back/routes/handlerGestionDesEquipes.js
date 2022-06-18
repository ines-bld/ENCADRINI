const express = require('express')
const router = express.Router();
const bodyparser = require('body-parser')
const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
require('dotenv').config();


//variable globale pour récupérer le role


const pool = mysql.createPool({
    connectionLimit: 100,
    port: process.env.DB_port,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME , //'test'
    multipleStatements: true,
  });
  
  //connect to db
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("Connected creation des equipes as ID " + connection.threadId);
  });


  // Multer Upload Storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/uploadsEqui/")  //__basedir +
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
        //cb(null, `${file.fieldname} - ${ Date.now() } ${path.extname(file.originalname)}`)
    }
});
const upload = multer({ storage: storage });



router.get('/', (req, res) => {
  res.sendFile( process.cwd() + "/index.html");  //__dirname +

});



module.exports =router;