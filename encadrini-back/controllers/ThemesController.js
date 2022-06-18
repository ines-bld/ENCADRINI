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
  console.log("Connected mes themes as ID " + connection.threadId);
});


//voir ses thmes pou un enseignant ou une entreprise
exports.viewMesThemes = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("Connected as ID " + connection.threadId);
    //User the connection
    connection.query(
      " select * from Theme where idProf = ?  or idCompany= ? ",
      [req.params.iduser, req.params.iduser],
      (err, rows) => {
        if (!err) {
          connection.release();
          res.json(rows);
        } else {
          connection.release();
          console.log(err);
        }
      }
    );
  });
};

//voir les themes valides
exports.viewThemesValides = (req, res) => {
    console.log(req.params.iduser,req.params.role)

    if(req.params.role === "etudiant"){

      pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);
        //User the connection
        connection.query(
          " select * from etudiant where idEtudiant = ? ",
          [req.params.iduser],
          (err, rows) => {
            if (!err) {
              connection.query(
              "select * from theme where idPromo= ? and valide='valide'",[rows[0].idPromo],
              (err, resultat) => {
                if (!err) {
                  res.json(resultat);
                } else {
                  console.log(err);}});
              connection.release();
            } else {
              connection.release();
              console.log(err);
            }
          }
        );
      });
    }else{  
      pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);
        //User the connection
        connection.query(
          " select * from Theme where valide='valide' ",
          (err, rows) => {
            if (!err) {
              connection.release();
              res.json(rows);
            } else {
              connection.release();
              console.log(err);
            }
          }
        );
      });
    }
};

//view Thème details in Mesthèmes or themevalides
exports.viewDetailTheme = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("viewwwtheme:::Connected as ID " + connection.threadId);
    console.log(req.params.idtheme);

    //User the connection
    connection.query(
      "select * from Theme where idTheme = ? ",
      [req.params.idtheme],
      (err, rows) => {
        //when done with the connection release it
        console.log(rows[0].idCompany);
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
      }
    );
  });
};


//delete theme from Mesthèmes
exports.deleteTheme = (req, res) => {
  const id = req.params.idtheme;
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("deletetheme:::Connected as ID " + connection.threadId);
    console.log(id);

    //User the connection
    connection.query("select valide from theme where idTheme = ?",[id],
      (err, rows) => {
        if (!rows[0].valide === 'valide') {
          connection.query("DELETE from theme where idTheme = ?",[id],
            (err, resultat) => {  
                if (!err) {
                  connection.release();
                  let removedTheme = encodeURIComponent("Theme has been removed ");
                  res.json("Theme has been removed");
                } else {
                  connection.release();
                  console.log(err);
                }         
            });
        } else {
          connection.query("DELETE from projet where idProjet = ? ; DELETE from theme where idTheme = ?",[id,id],
          (err, resultatt) => {  
              if (!err) {
                connection.release();
                let removedTheme = encodeURIComponent("Theme has been removed ");
                res.json("Theme has been removed");
              } else {
                connection.release();
                console.log(err);
              }         
          });
        }
      }
    );
  });
}

//update theme from Mesthèmes
exports.updateTheme = (req, res) => {
  const { titre , resume , idpromotion} = req.body;
  console.log(req.body);

  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("Connected as ID " + connection.threadId);

    //User the connection
    connection.query(
      "update theme set titre = ? , resume = ? ,idPromo =? where idTheme = ? ",
      [titre, resume, idpromotion , req.params.idtheme],
      (err, rows) => {
        //when done with the connection release it
        connection.release();
        if (!err) {
            //User the connection
                res.send({ alert : ` ${titre} has been updated succesefully ` });
        } else {
          console.log(err);
        }
      }
    );
  });
}