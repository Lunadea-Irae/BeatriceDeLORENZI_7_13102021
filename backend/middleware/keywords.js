const sequelize = require('sequelize');
const models = require('../models');

module.exports = (thisContent, msg) => {
    !thisContent.match(/\#[A-z0-9]+/gi) ? "" : thisContent.match(/\#[A-z0-9]+/gi).forEach(element => {
        const tag = element.replace(/([A-Z])/g, '$1').trim().replace('#', '').toUpperCase();


        //Synonymes

        /*axios.get('https://www.synonymo.fr/synonyme/test')
            .then(r => console.log(Object.keys(r)))
            .catch(err => console.error(err.message))*/


        models.Hashtag.findOrCreate({ where: { text: tag } })
            .then(r => {
                msg.addHashtag(r[0].id)
                models.Message.findAll({
                    where: { content: sequelize.where(sequelize.fn('LOWER', sequelize.col('content')), 'LIKE', '%' + tag + '%') }
                })
                    .then(h => h.forEach(ms => ms.addHashtag(r[0].id)))
                    .catch(err => console.error(err.message))
            })
            .catch(err => console.error(err.message))

    });

    models.Hashtag.findAll({
        attributes: ['text', "id"]
    })
        .then(r => {
            r.forEach(formerTag => {
                thisContent.match(formerTag) ?
                    msg.addHashtag(formerTag.id) : "";
            })
        })


    return;
}
