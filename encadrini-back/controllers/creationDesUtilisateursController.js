const bodyparser = require('body-parser')
const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
require('dotenv').config();



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
    console.log("Connected creation des utilisateurs as ID " + connection.threadId);
  });

  // Multer Upload Storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/uploads/")  //__basedir +
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});
const upload = multer({ storage: storage });


  exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err; //not connected
      console.log("Connected as ID " + connection.threadId);
      console.log(req.params.role);
  
    //   //User the connection
    //   connection.query(" select * from Theme where idPromo= ? ",[req.params.promo],(err, rows) => {
    //       //when done with the connection release it
    //       connection.release();
  
    //       if (!err) {
    //         res.json(rows);
    //       } else {
    //         console.log(err);
    //       }
    //       console.log("the data from Theme \n ", rows);
    //     }
    //   );
    });
  };


  app.post('/uploadfile', upload.single("uploadfile"), (req, res) => {
    const filePath = (__dirname + "/uploads/" + req.file.filename );  //__basedir +

   readXlsxFile(filePath).then((rows) => {
       // `rows` is an array of rows
       // each row being an array of cells.     
       console.log('here' , rows);
       // Remove Header ROW
       rows.shift();
       // Open the MySQL connection
       db.getConnection( (error,connection) => {
           if (error) {
               console.error(error);
           } else {
               let query = 'INSERT INTO customer (id, address, name, age) VALUES ?';
               connection.query(query, [rows], (error, response) => {
                   connection.release();
                   console.log(error || response);
                   console.log('finished');
               });
           }
       });
   })
   console.log(res);
   res.redirect('/');
});
