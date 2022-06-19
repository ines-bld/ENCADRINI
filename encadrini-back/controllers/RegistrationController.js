var mysql = require("mysql");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userMiddleware = require('../controllers/user');


var db = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "ibtihel06#",
  database: "ENCADRINI",
  port: 3306,
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
/**************************************** */

/*


 
router.post('/acc', userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    `SELECT * FROM utilisateur  WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This email is already in use!'
        });
      } else {
        // nom is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO compte  ( email, passwrd, activate,image) VALUES ( ${db.escape(req.body.email)},
      ${db.escape(hash)}, True ,NULL)`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'Registered!'
                });
              }
            );
      
          }
        });
      }
    }
  );
});

  */
 router.post('/create', userMiddleware.validateRegister, (req, res, next) => {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });};
      db.query(
        `INSERT INTO utilisateur  (idUser, nom,prenom,adresse ,dateNaiss,lieuNaiss,wilaya,situation,numTelph,sexe,email, password,poste) VALUES (  
          ${db.escape(req.body.idUser)}, ${db.escape(req.body.nom)}, ${db.escape(req.body.prenom)}, ${db.escape(req.body.adresse)},
           ${db.escape(req.body.dateNaiss)}, ${db.escape(req.body.lieuNaiss)}, ${db.escape(req.body.wilaya)}, 
           'c',${db.escape(req.body.numTelph)},${db.escape(req.body.sexe)},${db.escape(req.body.email)},
      ${db.escape(hash)},${db.escape(req.body.poste)})`,
        (err, result) => {
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err
            });
          }
          return res.status(201).send({
            msg: 'Registered!'
          });
        }
      );
      });
    })

      
  /*
  `INSERT INTO utilisateur (idUser,nom,prenom,adresse,dateNaiss,lieuNaiss,wilaya,situation,numTelph,sexe,email,password,activate,poste) VALUES 
                               ('14', ${db.escape(req.body.nom)},?,' N° 141 TEFFAH, Tiaret, Algerie', ?,?,?,'célibataire',?,?,?, ${db.escape(hash)},"1",?)`,
  [ nom, req.body.prenom ,
     req.body.dateNaiss ,req.body.lieuNaiss ,req.body.wilaya ,
        req.body.numTelph, req.body.sexe ,req.body.email , req.body.poste ],
        */

/*
        db.query(
          `INSERT INTO utilisateur (idUser,nom,prenom,adresse,dateNaiss,lieuNaiss,wilaya,situation,numTelph,sexe,email,password,activate,poste) VALUES (  
            '16', ${db.escape(req.body.nom)}, ${db.escape(req.body.prenom)},' N° 141 TEFFAH, Tiaret, Algerie',
            '1971-01-01 ', ${db.escape(req.body.lieuNaiss)} , ${db.escape(req.body.wilaya)}, 'célibataire'
         , ${db.escape(req.body.numTelph)},${db.escape(req.body.sexe)} ,${db.escape(req.body.email)},
        ${db.escape(hash)}, '1',${db.escape(req.body.poste)})`,
  (err, result) => {
    if (err) {
      throw err;
      return res.status(400).send({
        msg: err
      });
    }
    return res.status(201).send({
      msg: 'Registered!'
    });
  }
);
});

*/
router.post('/login',(req, res, next) => {
  console.log("hiii",req.body.email)

  db.query(
      `SELECT * FROM utilisateur WHERE email =${db.escape(req.body.email)};`,(err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      };
      if (!result.length) {
        return res.status(401).send({
          msg: 'email or password is incorrect!'
        });
      }
    bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: 'password is incorrect!!!!!!!!!!!'
            });
          }
          if (bResult) {
            const token = jwt.sign({
                nom: result[0].nom,
                userId: result[0].id
              },
              'SECRETKEY', {
                expiresIn: '7d'
              }
            );
          
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'email or password is incorrect!'
          });
        }
      );
  });
});



module.exports = router;
 