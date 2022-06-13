require("dotenv").config();
var mysql = require("mysql");

//connection pool
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
// pool.getConnection((err, connection) => {
//   if (err) throw err; //not connected
//   console.log("Connected as ID " + connection.threadId);
// });

//view all users ( entreprise + utilisateur)
exports.view = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("Connected as ID " + connection.threadId);

    //User the connection
    connection.query(
      "select * from utilisateur ; select * from entreprise ",
      (err, rows) => {
        //when done with the connection release it
        connection.release();
        const resultat = rows[0].concat(rows[1]);

        if (!err) {
          //let removedUser = req.query.removed;
          res.json(resultat);
          //res.render('home',{ rows , removedUser });
        } else {
          console.log(err);
        }
        console.log("the data from utilisateur \n ", resultat);
      }
    );
  });
};

//view user details
exports.viewdetail = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("viewuser:::Connected as ID " + connection.threadId);
    console.log(req.params.id);
    //User the connection
    connection.query("select * from utilisateur where idUser = ?",[req.params.id],(err, rows) => {
        if (!rows.length) {
          connection.query("select * from entreprise where idCompany = ?",[req.params.id],(err, resultat) => {
               connection.release();
               if (!err) {
                 res.json(resultat);
                 //res.end();
               } else {
                 console.log(err);
               }
              console.log("the data from entreprise \n ", resultat);
            }
          );
        }else{
         //when done with the connection release it
        connection.release();
        if (!err) {
          res.json(rows);
          //res.end();
        } else {
          console.log(err);
        }
        console.log("the data from utilisateur \n ", rows);
        }
        
      }
    );
  });
};

//edit user
exports.edit = (req, res) => {
  // res.render('edituser');

  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("edituser:::Connected as ID " + connection.threadId);
    console.log(req.params.id);

    //User the connection
    connection.query("select * from utilisateur where idUser = ?",[req.params.id],(err, rows) => {
        if (!rows.length) {
          connection.query("select * from entreprise where idCompany = ?",[req.params.id],(err, resultat) => {
               connection.release();
               if (!err) {
                 res.json(resultat);
                 //res.end();
               } else {
                 console.log(err);
               }
              console.log("the data from entreprise \n ", resultat);
            }
          );
        }else{
         //when done with the connection release it
        connection.release();
        if (!err) {
          res.json(rows);
          //res.end();
        } else {
          console.log(err);
        }
        console.log("the data from utilisateur \n ", rows);
        }
        
      }
    );
  });
};

//update user
exports.update = (req, res) => {
  // res.render('edituser');
  const { email, phone } = req.body;

  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("Connected as ID " + connection.threadId);

    //User the connection
    connection.query(
      "update utilisateur set email = ? , phone = ?  where idUser = ? ",[ email, phone, req.params.id],(err, rows) => {
        //when done with the connection release it
        connection.release();
        if (!err) {
          pool.getConnection((err, connection) => {
            if (err) throw err; //not connected
            console.log("Connected as ID " + connection.threadId);

            //User the connection
            connection.query("select * from utilisateur where idUser = ? ",[req.params.id],(err, rows) => {
                //when done with the connection release it
                connection.release();

                if (!err) {
                  // res.render("edituser", {
                  //   rows,
                  //   alert: ` ${nom} has been updated succesefully `,
                  // });
                  res.send(` ${nom} has been updated succesefully `);
                } else {
                  console.log(err);
                }
                console.log("the data from utilisateur \n ", rows);
              }
            );
          });

          // res.render('edituser',{ rows });
        } else {
          console.log(err);
        }
        console.log("the data from utilisateur \n ", rows);
      }
    );
  });
};

//delete user
exports.delete = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("deleteuser:::Connected as ID " + connection.threadId);
    console.log(req.params.id);


    //User the connection
    connection.query("select * from utilisateur where idUser = ?",[req.params.id],(err, rows) => {
        if (!rows.length) {
          connection.query("DELETE from entreprise where idCompany = ?",[req.params.id],(err, resultat) => {
               connection.release();
               if (!err) {
                let removedUser = encodeURIComponent("User has been removed ");
                res.redirect("/gestionDsComptes/?removed=" + removedUser);
                 //res.end();
               } else {
                 console.log(err);
               }
              console.log("the data from entreprise \n ", resultat);
            }
          );
        }else{
         //when done with the connection release it
        if (!err) {
           connection.query("DELETE from utilisateur where idUser = ? ",[req.params.id],(err, rows) => {
        //when done with the connection release it
        connection.release();

        if (!err) {
          let removedUser = encodeURIComponent("User has been removed ");
          res.redirect("/gestionDsComptes/?removed=" + removedUser);
        } else {
          console.log(err);
        }
        console.log("the data from utilisateur \n ", rows);
      }
    );
        } else {
          console.log(err);}
        }        
      }
    );
  });

};

//delete user
exports.desactivate = (req, res) => {

  pool.getConnection((err, connection) => {
    if (err) throw err; //not connected
    console.log("desactivateuser:::Connected as ID " + connection.threadId);


    //User the connection
    connection.query("select * from utilisateur where idUser = ?",[req.params.id],(err, rows) => {
        if (!rows.length) {
          connection.query("select * from entreprise where idCompany = ?",[req.params.id],(err, resultat) => {
               if (!err) {
                 connection.query("update entreprise set activate = ? where idCompany = ? ",[!resultat[0].activate, req.params.id],(err, rows) => {
             //when done with the connection release it
             connection.release();
             if (!err) {
              res.redirect(`/gestionDsComptes/viewuser/${[req.params.id]}`);
             } else {
                 console.log(err);
             }
                 console.log("the data from utilisateur \n ", rows);
            }
            );
               } else {
                 console.log(err);
               }
              console.log("the data from entreprise \n ", resultat);
            }
          );
        }else{
         //when done with the connection release it
        if (!err) {
           connection.query("update utilisateur set activate = ? where idUser = ? ",[!rows[0].activate, req.params.id],(err, rows) => {
        //when done with the connection release it
        connection.release();
        if (!err) {
          res.redirect(`/gestionDsComptes/viewuser/${[req.params.id]}`);
        } else {
          console.log(err);
        }
        console.log("the data from utilisateur \n ", rows);
      }
    );
        } else {
          console.log(err);}
        }        
      }
    );
  });

};

//find users by search
// exports.find=(req, res)=>{
//   pool.getConnection((err,connection)=>{
//       if(err) throw err ; //not connected
//       console.log('Connected as ID ' + connection.threadId);
//       let searchTerm = req.body.search ;  //search is the name of the input
//       //User the connection
//       connection.query('select * from utilisateur where nom LIKE ? OR prenom LIKE ? ', ['%' + searchTerm + '%' , '%' + searchTerm + '%'] ,(err , rows) => {
//         //when done with the connection release it
//         connection.release();
//         if(!err){
//           res.json(rows);
//         }else {
//             console.log(err);
//         }
//         console.log('the data from utilisateur \n ', rows);
//       });
//   });
// }
