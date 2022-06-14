var mysql = require("mysql");

var connection = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "password",
  database: "ENCADRINI",
  port: 3306,
  multipleStatements: true
});


connection.connect(function (error) {
    if (!!error) {
      console.log(error);
    } else {
      console.log("Connected!:)");
    }
  });
  
const themes = connection.query('SELECT * FROM theme ') ;

class Theme {

    constructor(id, title, coencadreur, outils,promotion, description) {
        this.id = id;
        this.title = title;
        this.coencadreur = coencadreur;
        this.outils = outils;
        this.promotion=parseInt(promotion);
        this.description = description;
    }


    save() {
        this.id = Math.floor(Math.random() * 100000);
        connection.query(
            'insert into theme (idTheme,titre,resume,idPromo) values (?,?,?,?) ', [this.id , this.title, this.description , this.promotion],  function(err,result) {});
    }

    static findAll() {
        return  themes;
    }

    static findById(themeId) {
        return connection.query('SELECT * FROM theme where id= themeId') ;
    }

}

exports.getThemeForm = (req, res, next) => {
    res.render('add-theme', {  path: '/prof/add-theme', pageTitle: 'ajouté théme' });
}

exports.postTheme = (req, res, next) => {
    const title=req.body.title;
    const coencadreur = req.body.coencadreur;
    const outils= req.body.outils;
    const promotion = req.body.promotion;
    const description = req.body.description;

    const theme = new Theme(null, title,coencadreur, outils, promotion ,description);
    theme.save();

    res.redirect('/prof/add-theme');
}

exports.getAllThemes = (req, res, next) => {
    const themes = Theme.findAll();
    // console.log(themes);
    res.render('index', {  themes: themes, path: '/', pageTitle: 'Home' });
};

exports.getThemeDetail = (req, res, next) => {
    const themes = Theme.findById(req.params.themeId);
    res.render('theme-detail', { theme: themes[0], pageTitle: 'théme details', path: '/'});
}