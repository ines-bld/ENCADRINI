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
  console.log("Connected authentification as ID " + connection.threadId);
});

exports.authentification = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);
    
        //User the connection
        connection.query(
          "select * from utilisateur where email = ? ; select * from entreprise where email = ?",[req.body.email,req.body.email],
          (err, rows) => {
            //when done with the connection release it
            connection.release();
            const resultat = rows[0].concat(rows[1]);
            if (!err) {
                if (!resultat.length) {
                    console.log("user not found :(")
                    return res.status(401).send({
                      msg: 'email or password is incorrect!'
                    });
                }else{
                    if ( req.body.password === resultat[0].password){
                        console.log("welcome to ENCADRINI !")
                        return res.status(200).send({
                            msg: 'Logged in welcome to ENCADRINI!',
                            user: resultat[0]
                          });
                    }else{
                      console.log("email or password is incorrect!")
                      return res.status(401).send({
                        msg: 'email or password is incorrect!'
                      });
                    }
                }
              //res.json(resultat[0].password);        
            } else {
              console.log(err);
            }
            //console.log("the data from utilisateur \n ", resultat[0]);
          }
        );
      });
}