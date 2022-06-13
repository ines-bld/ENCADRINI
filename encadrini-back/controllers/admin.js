const Theme = require('../models/theme');

exports.getThemeForm = (req, res, next) => {
    res.render('form-dépot', {  path: '/admin/form-dépot', pageTitle: 'ajouté théme' });
}

exports.postTheme = (req, res, next) => {
    const title=req.body.title;
    const coencadreur = req.body.coencadreur;
    const outils= req.body.outils;
    const promotion = req.body.promotion;
    const description = req.body.description;

    const theme = new Theme(null, title,coencadreur, outils, promotion ,description);
    theme.save();

    res.redirect('/');
}