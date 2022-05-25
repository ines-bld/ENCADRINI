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


const PORT= process.env.PORT || 5000;;  //backend routing port
const app = express();

app.use(cors());
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


app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`);
})