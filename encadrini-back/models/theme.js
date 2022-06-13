
const themes = [];

class Theme {

    constructor(id, title, coencadreur, outils,promotion, description) {
        this.id = id;
        this.title = title;
        this.coencadreur = coencadreur;
        this.outils = outils;
        this.promotion=promotion;
        this.description = description;
    }


    

    save() {
        this.id = Math.floor(Math.random() * 100000);
        themes.push(this);
    }

    static findAll() {
        return themes;
    }

    static findById(themeId) {
        return themes.filter(p => p.id == themeId);
    }

}

module.exports = Theme;