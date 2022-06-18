require("dotenv").config();
var mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  port: process.env.DB_port,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

//connect to db
pool.getConnection((err, connection) => {
  if (err) throw err; //not connected
  console.log("Connected gestion des themes as ID " + connection.threadId);
});

exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("Connected as ID " + connection.threadId);
    console.log(req.params.promo);

    //User the connection
    connection.query(
      " select * from Theme where idPromo= ? ",
      [req.params.promo],
      (err, rows) => {
        //when done with the connection release it
        
        if (!err) {

          connection.release();     
          res.json(rows);
        } else {connection.release();console.log(err); }
      }
    );
  });
};

//view Thème details
exports.viewdetail = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("vietheme:::Connected as ID " + connection.threadId);
    console.log(req.params.id);

    //User the connection
    connection.query(
      "select * from Theme where idPromo= ? and idTheme = ? ",
      [req.params.promo, req.params.id],
      (err, rows) => {
        //when done with the connection release it

        if (!err) {
          var newrows = [];
          connection.query(
            "select * from utilisateur where idUser= ? ; select * from promotion where idPromo = ?; select * from entreprise where idCompany= ?  ",[rows[0].idProf,rows[0].idPromo,rows[0].idCompany],
            (err, resultat) => {
              console.log(resultat[2].idCompany);
              if (!err) {
                if (!resultat[2].length) {
                  var datatheme =
                      {
                         "idTheme": rows[0].idTheme,
                         "titre": rows[0].titre,
                         "resume": rows[0].resume,
                         "state": rows[0].valide,
                         "responsableNom": resultat[0][0].nom,
                         "responsablePrenom": resultat[0][0].prenom,
                         "promotion": rows[0].idPromo,
                         "cycle": resultat[1][0].idCycle
                      }
                      newrows.push(datatheme)
                }else {
                  var datatheme =
                      {
                         "idTheme": rows[0].idTheme,
                         "titre": rows[0].titre,
                         "resume": rows[0].resume,
                         "state": rows[0].valide,
                         "promotion": rows[0].idPromo,
                         "cycle": resultat[1][0].idCycle,
                         "company": resultat[2][0].idCompany 
                      }
                      newrows.push(datatheme)
                }
                connection.release();
                res.json(newrows);
              } else {
                console.log(err);}}
          );          
        //res.end();
        } else {
          console.log(err);
          connection.release();
        }
        console.log("the data from theme \n ", rows);
      }
    );
  });
};

//view Validation state 
exports.viewValidation = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("viewvalidation:::Connected as ID " + connection.threadId);
    console.log(req.params.id);

    //User the connection
    connection.query(
      "select * from Theme where idPromo= ? and idTheme = ? ",
      [req.params.promo, req.params.id],
      (err, rows) => {
        //when done with the connection release it

        if (!err) {

                  connection.release();
                  console.log(rows[0].valide);
                  res.json(rows[0].valide);
        } else {
          console.log(err);
          connection.release();
        }
      }
    );
  });
};



//valider le thème 
exports.validate = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("validate:::Connected as ID " + connection.threadId);
    console.log(req.params.id);

    //User the connection
    connection.query(
      "update theme set valide = ? where idPromo= ? and idTheme = ? ; insert into projet (idProjet) values (?)",
      ["valide",req.params.promo, req.params.id,req.params.id],
      (err, rows) => {
        //when done with the connection release it
        if (!err) {            
                  connection.release();
                  //res.redirect(`/gestionDsthemes/${[req.params.promo]}/viewTheme/${[req.params.id]}`);   
                  res.end();     
          //res.end();
        } else {
          console.log(err);
          connection.release();
        }
      }
    );
  });
};


//valider le thème 
exports.refuse = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("refuse:::Connected as ID " + connection.threadId);
    console.log(req.params.id);

    //User the connection
    connection.query(
      "update theme set valide = ? where idPromo= ? and idTheme = ? ",
      ["refuse",req.params.promo, req.params.id],
      (err, rows) => {
        //when done with the connection release it
        if (!err) {            
                  connection.release();
                  //res.redirect(`/gestionDsthemes/${[req.params.promo]}/viewTheme/${[req.params.id]}`);   
                  res.end();     
          //res.end();
        } else {
          console.log(err);
          connection.release();
        }
      }
    );
  });
};