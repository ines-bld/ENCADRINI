const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/handler.js');


const PORT= process.env.PORT || 5000;;  //backend routing port
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routes);


app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`);
})