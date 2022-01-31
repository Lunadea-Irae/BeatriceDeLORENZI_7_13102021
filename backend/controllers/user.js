const bcrypt = require('bcrypt');
const models = require('../models');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");

const fs = require('fs');

require('dotenv').config();

exports.signup = (req, res, next) => {
    if (!req.body.email || !req.body.username || !req.body.password) {
        res.status(400).json({ error: "Formulaire incomplet" })
        return;
    } else if (!/.+\@.+\..+/.test(req.body.email)) {
        res.status(400).json({ error: 'email non valide' })
        return;
    } else {
        models.User.findOne({
            where: {
                [Op.or]: [{ email: req.body.email }, { username: req.body.username }]
            }
        })
            .then(
                user => {
                    if (user === null) {
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {
                                const user = models.User.create({
                                    email: req.body.email,
                                    username: req.body.username,
                                    password: hash,
                                    showEmail: false
                                })
                                    .then((r) => res.status(201).json(r.dataValues))
                                    .catch(error => res.status(520).json({ message: error.message }));
                            })
                            .catch(error => res.status(520).json({ error: error.message }))
                    } else if (user.email === req.body.email) {

                        return res.status(400).json({ error: 'Cet email existe déjà !' });
                    } else if (user.username === req.body.username) {

                        return res.status(400).json({ error: 'Ce Pseudo existe déjà !' });
                    } else {
                        return res.status(520).json({ error: 'Une erreur s\'est produite.' })
                    }
                }
            )
            .catch(error => res.status(520).json({ error: error.message }));
    }
}


exports.login = (req, res, next) => {
    let condition;
    req.body.email ? condition = { email: req.body.email } : condition = { username: req.body.username };
    models.User.findOne({
        where: condition
    })
        .then(user => {
            if (!user) {
                return res.status(400).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(400).json({ error: 'Mot de passe incorrect !' });
                    }

                    userData = { ...user.dataValues };
                    delete userData.password;
                    res.status(200).json({
                        userId: user.id,
                        accessToken: 'Bearer_ ' + jwt.sign(
                            { ...userData },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '900s' }
                        ),
                        refreshToken: jwt.sign(
                            { userId: user.id },
                            process.env.REFRESH_TOKEN_SECRET
                        ),
                    });
                })
                .catch(error => res.status(520).json({ error: error.message + " ligne 84" }));
        })
        .catch(error => res.status(520).json({ error: error.message + " ligne 86" }));
};



// REFRESH TOKEN

exports.refreshToken = (req, res, next) => {

    const accessToken = jwt.decode(req.headers.accesstoken.split(' ')[1]);
    const refreshToken = jwt.decode(req.headers.refreshtoken);
    if (accessToken.id === refreshToken.userId) {
        const userId = accessToken.id;
        models.User.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.status(400).json({ error: 'Utilisateur non trouvé' });
                } else if (user.level === 0) {
                    return res.status(401).json({ error: 'Utilisateur désactivé' });
                } else {
                    userData = { ...user.dataValues };
                    delete userData.password;
                    return res.status(200).json({
                        accessToken: 'Bearer_ ' + jwt.sign(
                            { ...userData },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '900s' }
                        )
                    });
                }
            })
    } else {
        return res.status(401).json({ error: "AccessToken et RefreshToken incompatibles." })
    }

};



//   GET ONE USER
exports.getOne = (req, res, next) => {
    models.User.findOne({
        where: { id: req.params.id },
        include: { model: models.UserMessages, include: { model: models.Message, include: [{ model: models.Comment }, { model: models.Like }] } },
    })
        .then((user) => {
            if (user) {
                for (let [key, value] of Object.entries(user.dataValues)) { value === null ? user[key] = undefined : '' }
                console.log(user.password);
                user.password = undefined;
                !user.showEmail ? user.email = undefined : "";
                user.showEmail = undefined;
                return res.status(200).json(user);
            } else {
                return res.status(404).json({ error: "Page non trouvée" })
            }
        })
        .catch(error => res.status(520).json({ error: error.message }))
};




//   GET ONE USER TO EDIT
exports.getOneToEdit = (req, res, next) => {
    models.User.findOne({
        where: { id: req.params.id },
        include: { model: models.UserMessages, include: models.Message },
    })
        .then((user) => {
            if (user) {
                for (let [key, value] of Object.entries(user.dataValues)) { value === null ? user[key] = undefined : '' }
                user.password = undefined;
                return res.status(200).json(user);
            } else {
                return res.status(404).json({error : "Page non trouvée"})
            }
        })
        .catch(error => res.status(520).json({ error: error.message }))
};


//     EDIT USER
exports.editOne = (req, res, next) => {
    if (req.body.password && req.body.password != '') {
        models.User.findByPk(req.params.id, { attributes: ['email', 'password'] })
            .then(user => {
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(400).json({ error: 'Mot de passe incorrect !' });
                        } else if (req.body.newPassword1 !== req.body.newPassword2) {
                            return res.status(400).json({ error: 'Les deux nouveaux mots de passe de correspondent pas' })
                        }
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {
                                models.User.update({ email: req.body.email, password: hash }, { where: { id: req.params.id } })
                                    .then(res.status(204).json({ message: 'Modifications enregistrées' }))
                                    .catch(error => res.status(520).json({ error: error.message }))
                            })

                    })
            })
    } else {
        let user = { ...req.body };
        user.password === '' ? delete user.password : '';
        user.avatar === '' ? delete user.avatar : '';
        user.birthday === '' ? delete user.birthday : '';
        if (req.file) {
            user.avatar = `${req.protocol}://${req.get('host')}/medias/avatars/${req.file.filename}`;
        }
        models.User.update(user, { where: { id: req.params.id } })
            .then(r => res.status(204).json(r))
            .catch((error) => { res.status(520).json({ error: error.message }) })
    };

}

//    DELETE USER
exports.deleteOne = (req, res, next) => {

    //TRANSFERT MESSAGES TO INVITE
    models.User.findByPk(req.params.id)
        .then(user => {
            if (user.avatar) {
                const filename = user.avatar.split('/avatars/')[1];
                fs.unlink(`medias/avatars/${filename}`, () => { })
            }
        })
        .then(
            models.UserMessages.findAll({ where: { UserId: req.params.id } })
                .then((result) => {
                    if (result) {
                        result.forEach(element => {
                            // Result is array because we have used findAll. We can use findOne as well if you want one row and update that.
                            element.set({ UserId: 9 });
                            element.save(); // This is a promise
                        });

                    }
                })
                .then(
                    models.User.destroy({ where: { id: req.params.id } })
                        .then(r => res.status(204).json({ message: 'user deleted' }))

                )
        )

}

//    DELETE DATA FOR ONE USER
exports.deleteDataOne = (req, res, next) => {

}

exports.deleteAvatar = (req, res, next) => {
    models.User.findByPk(req.params.id)
        .then(user => {
            if (user.avatar) {
                const filename = user.avatar.split('/avatars/')[1];
                fs.unlink(`medias/avatars/${filename}`, () => { })
                models.User.update({ avatar: null }, { where: { id: req.params.id } })
            }
        })
        .then(res.status(204).json({ message: "avatar supprimé" }))
        .catch(e => res.status(520).json({ error: e.message }))
}

//   GET ALL USERS
exports.getAllUsers = (req, res, next) => {
    models.User.findAll({ attributes: ['id', 'username', 'service', 'avatar'] })
        .then(userDatas => res.status(200).json(userDatas))
        .catch(error => res.status(520).json({ error: error.message }))
}
