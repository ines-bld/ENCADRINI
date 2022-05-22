require('dotenv').config();
var mysql = require("mysql");


//connection pool
const pool = mysql.createPool({
  connectionLimit : 100,
  port            : process.env.DB_port,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_NAME,
  multipleStatements: true
});


//connect to db
pool.getConnection((err,connection)=>{
  if(err) throw err ; //not connected
  console.log('Connected as ID ' + connection.threadId);

})


exports.view=(req, res)=>{
  pool.getConnection((err,connection)=>{
    if(err) throw err ; //not connected
    console.log('Connected as ID ' + connection.threadId);

    //User the connection
    connection.query('select * from utilisateur ', (err , rows) => {
      //when done with the connection release it 
      connection.release();
      
      if(!err){
          //let removedUser = req.query.removed;
          res.json(rows)
          //res.render('home',{ rows , removedUser });
         
      }else {
          console.log(err);
      }
      console.log('the data from utilisateur \n ', rows);
    });
});
  
   // res.end(JSON.stringify(str));
   
 }