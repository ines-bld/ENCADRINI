var mysql = require("mysql");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userMiddleware = require('../controllers/user');

var db = mysql.createConnection({

  connectionLimit : 100,
  port            : process.env.DB_port,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME,
  multipleStatements: true
});

db.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});


 /*
router.post('/acc', userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    `SELECT * FROM compte  WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This email is already in use!'
        });
      } else {
        // nom is available
        bcrypt.hash(req.body.passwrd, 10, (err, hash) => {
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

  
router.post('/usr',  (req, res, next) => {
  bcrypt.hash(req.body.passwrd, 10, (err, hash) => {
    if (err) {
      return res.status(500).send({
        msg: err
      });};
db.query(
  `INSERT INTO utilisateur  (idUser, nom,prenom,adresse ,dateNaiss,lieuNaiss,wilaya,situation,numTelph,sexe,poste,idEtbalissement,email, password) VALUES (  
    ${db.escape(req.body.idUser)}, ${db.escape(req.body.nom)}, ${db.escape(req.body.prenom)}, ${db.escape(req.body.adresse)},
     ${db.escape(req.body.dateNaiss)}, ${db.escape(req.body.lieuNaiss)}, ${db.escape(req.body.wilaya)}, 
  ${db.escape(req.body.situation)}, ${db.escape(req.body.numtelph)},${db.escape(req.body.sexe)}, ${db.escape(req.body.poste)},  ${db.escape(req.body.idEtbalissement)},${db.escape(req.body.email)},
${db.escape(hash)})`,
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




//LOGINNN

module.exports={
login :(req, res, next) => {
//exports.get('/auth', (req, res, next) => {
  console.log(req.body.email);
        db.query(
            `SELECT * FROM compte WHERE email =${db.escape(req.body.email)};`,
          
          (err, result) => {
            // user does not exists
            if (err) {
              throw err;
              return res.status(400).send({
                msg: err
              });
            }
            if (!result.length) {
              return res.status(401).send({
                msg: 'email or password is incorrect!'
              });
            }
            // check password
            bcrypt.compare(
              req.body.passwrd,
              result[0]['passwrd'],
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

        }
  
        );
 //});
},
};

//}); 
