const express = require('express')
const router = express.Router();
const bodyparser = require('body-parser')
const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
require('dotenv').config();


//variable globale pour récupérer le role
var role ='';

function setRole(newrole){
    role = newrole;
 }



const pool = mysql.createPool({
    connectionLimit: 100,
    port: process.env.DB_port,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME , //'test'
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
        cb(null, process.cwd() + "/uploads/")  //__basedir +
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
        //cb(null, `${file.fieldname} - ${ Date.now() } ${path.extname(file.originalname)}`)
    }
});
const upload = multer({ storage: storage });

  router.get('/:role', (req, res) => {
    setRole(req.params.role)
    console.log('helllooooo',role)
    //res.redirect(`/creationDesUtilisateurs/${role}/uploadfile`);
   res.sendFile( process.cwd() + "/index.html");  //__dirname +
});

// router.get('/:role/uploadfile', (req, res) => {
//    res.sendFile( process.cwd() + "/index.html");  //__dirname +
// });

  router.post('/uploadfile', upload.single("uploadfile"), (req, res) => {
    
    const filePath = (process.cwd() + "/uploads/" + req.file.filename );  //__dirname + "/uploads/" + req.file.filename
    console.log( filePath)
   readXlsxFile(filePath).then((rows) => {
       // `rows` is an array of rows
       // each row being an array of cells.     
       console.log('here' , rows);
       // Remove Header ROW
       rows.shift();
       // Open the MySQL connection

       pool.getConnection( (error,connection) => {
           if (error) {
               console.error(error);
           } else {

            switch (role) {
                case 'etudiant':
                  console.log('Inside etudiant');
                  
                  rows.forEach((user)=> {
                      const wilaya = ['wilaya','Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouria','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbes','Annaba','Guelma','Constantine','Médéa','Mostaganem','MSila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdés','El Tarf','Tindouf','Tissemslit','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbés','Salah','Guezzam','Touggourt','Djanet','MGhair','Meniaa'];

                      var etudiant = user.splice(12); // extraire les attributs de l'étudiant
                      etudiant.unshift(user[0]); //ajoute idUser au début du tableau
                      user.splice(6, 1,wilaya[user[6]]); //replace numwilaya par la wilaya coresspondate
                      user.push('etudiant');

                      let query = 'INSERT INTO utilisateur (idUser,nom,prenom,adresse,dateNaiss,lieuNaiss,wilaya,situation,numTelph,sexe,email,password,poste) VALUES (?) ; INSERT INTO etudiant (idEtudiant,moy,idPromo) VALUES (?) ';
                      connection.query(query, [user , etudiant], (error, response) => {
                      // connection.release();
                      console.log(error || response);
                      console.log('finished');

                   });
                   });
                   connection.release();
                  
                  break;
                case 'entreprise':
                  console.log('Inside entreprise');

                   let query = 'INSERT INTO entreprise (idCompany,nom,adresse,numTelph,descrip,email,password) VALUES ? ; UPDATE entreprise set poste="entreprise" ';
                   connection.query(query, [rows], (error, response) => {
                   connection.release();
                   console.log(error || response);
                   console.log('finished');
                   });

                break;
                case 'enseignant':
                  console.log('Inside enseignant');
                  
                  rows.forEach((user)=> {
                      const wilaya = ['wilaya','Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouria','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbes','Annaba','Guelma','Constantine','Médéa','Mostaganem','MSila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdés','El Tarf','Tindouf','Tissemslit','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbés','Salah','Guezzam','Touggourt','Djanet','MGhair','Meniaa'];

                      var prof = user.splice(12); // extraire les attributs propre à l'enseignant (grade)
                      prof.unshift(user[0]); //ajoute idUser au début du tableau
                      user.splice(6, 1,wilaya[user[6]]); //replace numwilaya par la wilaya coresspondate
                      user.push('prof');
                      console.log('usrr:',user,'prof',prof);

                      let query = 'INSERT INTO utilisateur (idUser,nom,prenom,adresse,dateNaiss,lieuNaiss,wilaya,situation,numTelph,sexe,email,password,poste) VALUES (?) ; INSERT INTO enseignant (idProf,grade) VALUES (?) ';
                      connection.query(query, [user , prof], (error, response) => {            
                      console.log(error || response);
                      console.log('finished');                      
                   });
                   
                  });
                connection.release();
                  break;
                default:
                  console.log(`Sorry, we are out of ${role}.`);
                }
           }
       });
   })
   console.log(res);
   res.redirect(`/creationDesUtilisateurs/${role}`);
});




module.exports =router;