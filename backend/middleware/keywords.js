const sequelize = require('sequelize');
const models = require('../models');

module.exports = (thisContent, msgId) => {
    !thisContent.match(/\#[A-z0-9]+/gi) ? "" : thisContent.match(/\#[A-z0-9]+/gi).forEach(element => {
        const test = element.replace(/([A-Z])/g, '$1').trim().replace('#', '').toUpperCase();
        console.log(test)


        //Synonymes

        /*axios.get('https://www.synonymo.fr/synonyme/test')
            .then(r => console.log(Object.keys(r)))
            .catch(err => console.error(err.message))*/


        models.Hashtag.findOrCreate({ where: { text: test } })
            .then(r => {
                msgId.addHashtag(r[0].id)
                models.Message.findAll({
                    where: { content: sequelize.where(sequelize.fn('LOWER', sequelize.col('content')), 'LIKE', '%' + test + '%') }
                })
                    .then(h => h.forEach(ms => ms.addHashtag(r[0].id)))
                    .catch(err => console.error(err.message))
            })
            .catch(err => console.log(err.message))

    });
    return;
}
