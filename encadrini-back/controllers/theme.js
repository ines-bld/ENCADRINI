var mysql = require("mysql");
const express = require("express");
const router = express.Router();
require("dotenv").config();

const multer = require("multer");

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

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/upload/");},
  /*filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }*/
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/add-theme/:iduser", upload.single("file"), (req, res) => {

  const {idPromo , idTheme , titre , idProf , idcoencadrant , resume , idOutil , fileList , name} = req.body ;

  console.log("hi",idProf);
  console.log(req.body);
  console.log(req.body.idOutil);
  console.log(req.body.name);
  console.log(fileList);

  db.query(
    ` INSERT INTO theme (idTheme,titre,resume,idProf,idPromo,nomf) values (${db.escape(idTheme)},${db.escape(titre)},${db.escape(resume)},${db.escape(idProf)},${db.escape(idPromo)},${db.escape(name)}) ; INSERT INTO projet (idProjet) values (${db.escape(idTheme)}) `,
    (err, result) => {
      // user does not exists
      if (err) {
        console.log("err1");
      } else {
        db.query(
            `INSERT INTO coencadrant (idTheme,idProf) values (${db.escape(idTheme)}, ${db.escape(idcoencadrant)}) `,
            (err, result) => {
              // user does not exists
              if (err) {
                console.log("err2");
              } else {
                //console.log(result);
              }
            }
          );
        
          db.query(
            ` INSERT INTO utiliser (idTheme,idOutil) values ( ${db.escape(idTheme)}, ${db.escape(idOutil)} ) `,
            (err, result) => {
              // user does not exists
              if (err) {
                console.log("err3");
              } else {
                //console.log(result);
              }
            }
          );
       // console.log(result);
      }
    }
  );
  res.end();
});

module.exports = router;
