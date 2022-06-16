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

          // var newrows = [];
          // rows.forEach((theme) => {
          //   connection.query(
          //     "select * from utilisateur where idUser= ? ",[theme.idProf],(err, resultat) => {
          //       if (!err) {
          //         var datatheme =
          //               {
          //                  "idTheme": theme.idTheme,
          //                  "titre": theme.titre,
          //                  "responsableNom": resultat[0].nom,
          //                  "responsablePrenom": resultat[0].prenom
          //               }
          //         newrows.push(datatheme)
          //         console.log('herreee',newrows)  
          //       } else {
          //         console.log(err);}}
          //   );           
          // }); 


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
           //var newrows = [];
            connection.query(
              "select * from utilisateur where idUser= ? ; select * from promotion where idPromo = ?",[rows[0].idProf,rows[0].idPromo ],
              (err, resultat) => {
                if (!err) {
                  var datatheme =
                        {
                           "idTheme": rows[0].idTheme,
                           "titre": rows[0].titre,
                           "resume": rows[0].resume,
                           "responsableNom": resultat[0][0].nom,
                           "responsablePrenom": resultat[0][0].prenom,
                           "promotion": resultat[1][0].annee
                        }
                  //newrows.push(datatheme)
                  connection.release();
                  res.json(datatheme);
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
      [1,req.params.promo, req.params.id,req.params.id],
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