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
      connection.query(" select * from Theme where idPromo= ? ",[req.params.promo],(err, rows) => {
          //when done with the connection release it
          connection.release();
  
          if (!err) {
            res.json(rows);
          } else {
            console.log(err);
          }
          console.log("the data from Theme \n ", rows);
        }
      );
    });
  };
  


  //view Thème details
  exports.viewdetail = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err; //not connected
      console.log("viewuser:::Connected as ID " + connection.threadId);
      console.log(req.params.id);

      //User the connection
      connection.query("select * from Theme where idPromo= ? and idTheme = ? ",[req.params.promo,req.params.id],(err, rows) => {
         
           //when done with the connection release it
          connection.release();
          if (!err) {
            res.json(rows);
            //res.end();
          } else {
            console.log(err);
          }
          console.log("the data from theme \n ", rows);
        }
        );
      });
    };
    