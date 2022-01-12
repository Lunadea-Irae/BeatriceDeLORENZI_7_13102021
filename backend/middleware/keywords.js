
const models = require('../models');

module.exports = (thisContent, msgId) => {
    !thisContent.match(/\#[A-z0-9]+/gi) ? "" : thisContent.match(/\#[A-z0-9]+/gi).forEach(element => {
        const test = element.replace(/([A-Z])/g, '$1').trim().replace('#', '').toUpperCase();
        console.log(test)


        //Synonymes

        /*axios.get('https://www.synonymo.fr/synonyme/test')
            .then(r => console.log(Object.keys(r)))
            .catch(err => console.error(err.message))*/

        /*const amidala = await User.create({ username: 'p4dm3', points: 1000 });
        const queen = await Profile.create({ name: 'Queen' });
        await amidala.addProfile(queen, { through: { selfGranted: false } });
        const result = await User.findOne({
          where: { username: 'p4dm3' },
          include: Profile
        });
        console.log(result);*/

        models.Hashtag.findOrCreate({ where: { text: test } })
            .then(r => {
                msgId.addHashtag(r[0].id)
            })
            .catch(err => console.log(err.message))

    });
    return;
}
