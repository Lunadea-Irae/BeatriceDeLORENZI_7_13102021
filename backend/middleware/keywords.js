const sequelize = require('sequelize');
const models = require('../models');

module.exports = (thisContent, msg) => {
    models.Hashtag.findAll({
        include: {
            model: models.Message, where: {
                id: {
                    [sequelize.Op.not]: msg.id
                }
            }
        }
    })
        .then(r => {
            r.forEach(formerTag => {
                thisContent.toUpperCase().match(formerTag.text) ?
                    msg.addHashtag(formerTag.id) : "";
            })
        })
    !thisContent.match(/\#[A-z0-9]+/gi) ? "" : thisContent.match(/\#[A-z0-9]+/gi).forEach(element => {
        const tag = element.replace(/([A-Z])/g, '$1').trim().replace('#', '').toUpperCase();


        //Synonymes

        /*axios.get('https://www.synonymo.fr/synonyme/test')
            .then(r => console.log(Object.keys(r)))
            .catch(err => console.error(err.message))*/


        models.Hashtag.findOrCreate({ where: { text: tag } })
            .then(r => {
                console.log(r[0]);
                msg.addHashtag(r[0].id)
                models.Message.findAll({
                    where: { content: sequelize.where(sequelize.fn('LOWER', sequelize.col('content')), 'LIKE', '%' + tag + '%') }
                })
                    .then(h => h.forEach(ms => {
                        console.log(ms);
                        ms.addHashtag(r[0].id)
                    }))
                    .catch(err => console.error(err.message))
            })
            .catch(err => console.error(err.message))

    });




    return;
}
