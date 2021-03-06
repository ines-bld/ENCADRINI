const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
require('dotenv').config();

module.exports = {
  validateRegister: (req, res, next) => {
    // nom min length 3
   if (!req.body.nom || req.body.nom.length < 3) {
      return res.status(400).send({
        msg: 'Please enter a nom with min. 3 chars'
      });
    }
    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: 'Please enter a password with min. 6 chars'
      });
    }

    
    next();
},


  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        'SECRETKEY'
      );
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: 'Your session is not valid!'
      });
    }
  },
};