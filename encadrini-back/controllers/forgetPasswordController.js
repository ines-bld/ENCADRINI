var express = require("express");
var nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
var randtoken = require("rand-token");
var mysql = require("mysql");

var connection = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "ibtihel06#",
  database: "ENCADRINI",
  port: 3306,
  multipleStatements: true
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});

//send email
function sendEmail(email, token) {
  var email = email;
  var token = token;
  var mail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "emeraldstech.22@gmail.com", // Your email id
      pass: "samir22@", // Your password
    },
  });
  var mailOptions = {
    from: "[email protected]",
    to: email,
    subject: "ENCADRINI Reset Password Link ",
    html:
      '<p>You requested for reset password, kindly use this <a href="http://localhost:3000/resetPassword?token=' +
      token +
      '">link</a> to reset your password</p>',
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
}

/* forget password page */
// exports.viewforget = (req, res, next) => {
//   res.render("D:\docsd'esioffic\1CS\S2\projet2\code\ENCADRINI\encadrini-front\src\pages\ForgottenPassword.js", {
//     title: "Forget Password Pageee",
//   });
// };



/* send reset password link in email */
exports.resetsend = (req, res, next) => {
  //console.log("inside");

  var email = req.body.email;

  console.log("inside", email,"hhhhhh");


  connection.query(
    'SELECT * FROM utilisateur WHERE email ="' + email + '"',
    function (err, result) {
      if (err) {
        console.log("inside");
        throw err;
      } else if (!result.length) {
        return res.status(400).send("The Email is not registered with us");
      } else if (!result[0].email) {
        return res.status(400).send("Something goes wrong. Please try again");
      }
      
      console.log(result[0]);

      if (result[0].email.length > 0) {
        var token = randtoken.generate(20);
        var sent = sendEmail(email, token);
        console.log("hello");
        if (sent != "0") {
          var data = {
            token: token,
          };
          connection.query(
            'UPDATE utilisateur SET ? WHERE email ="' + email + '"',
            data,
            function (err, result) {
              if (err) throw err;
            }
          );
        }
      } 
      // res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
     res.end();
    }  
  );
};

/* reset page */
exports.resetview = (req, res, next) => { 
  console.log("hello",JSON.stringify(req.query.token));
  res.end(JSON.stringify(req.query.token));
};

/* update password to database */
exports.resetupdate = (req, res, next) => {
  var token = req.body.token;
  var password = req.body.password;

  console.log("hello 1",token , password);

  connection.query(
    'SELECT * FROM utilisateur WHERE token ="' + token + '"',
    function (err, result) {
      if (err) {
        throw err;
      } else if (!result.length) {
        console.log("hello 2");
        return res.status(400).send("Invalid link; please try again ");
      }
      if (result.length > 0) {
        var saltRounds = 10;
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            var data = {
              password: hash,
            };
            connection.query(
              'UPDATE utilisateur SET ? WHERE email ="' + result[0].email + '"',
              data,
              function (err, result) {
                if (err) throw err;
              }
            );
          });
        });
      }
     // res.redirect("/");
    }
  );
};
