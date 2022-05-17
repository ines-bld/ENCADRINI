

exports.view=(req, res)=>{
   const str = [{
     "name": "Ibtihel",
     "message": "you are doing so good mate !"
   }]
   res.end(JSON.stringify(str));
  //  res.redirect("/");
}