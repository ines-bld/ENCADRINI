const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require("cors");

// const resetroutes = require('./routes/forgotPassword.js'); //idk
const routes = require('./routes/handler.js');
const routesGestionDesComptes = require('./routes/handlerGestionDesComptes.js');
const routesGestionDesThemes = require('./routes/handlerGestionDesThemes.js');
const routesCreationDesUtilisateurs = require('./routes/handlerCreationDesUtilisateurs.js');

const PORT= process.env.PORT || 5000;;  //backend routing port
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}))

 

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use(session({
  secret: '123458cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))



app.use('/', routes);
app.use('/gestionDsComptes', routesGestionDesComptes );
app.use('/gestionDsThemes', routesGestionDesThemes );
app.use('/creationDesUtilisateurs',routesCreationDesUtilisateurs );


app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`);
})