const bcrypt = require('bcrypt');
const models = require('../models');
const jwt = require('jsonwebtoken');
const usersTest = require('../models/models/users.json');

require('dotenv').config();

exports.signup = (req, res, next) => {
    if (!req.body.email || !req.body.username || !req.body.password) {
        res.status(400).json({ error: "Formulaire incomplet" })
    } else if (!/.+\@.+\..+/.test(req.body.email)) {
        res.status(400).json({ error: 'email non valide' })
    } else {
        models.User.findOne({
            attributes: ['email'],
            where: { email: req.body.email }
        })
            .then(
                user => {
                    if (user === null) {
                        bcrypt.hash(req.body.password, 10)
                            .then(hash => {
                                const user = models.User.create({
                                    email: req.body.email,
                                    username: req.body.username,
                                    password: hash
                                })
                                    .then(() => res.status(201).json({ message: user.username + ' créé !' }))
                                    .catch(error => res.status(400).json({ message: error.message }));
                            })
                            .catch(error => res.status(500).json({ error: error.message }))
                    } else {
                        return res.status(400).json({ error: 'Cet email existe déjà !' });
                    }
                }
            )
            .catch(error => res.status(500).json({ error: error.message }));
    }
}


exports.login = (req, res, next) => {
    models.User.findOne({
        $or: [
            {
                attributes: ['email'],
                where: { email: req.body.email }
            },
            {
                attributes: ['username'],
                where: { username: req.body.username }
            }]
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }

                    res.status(200).json({
                        userId: user.id,
                        accessToken: jwt.sign(
                            { userId: user.id },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: '600s' }
                        ),
                        refreshToken: jwt.sign(
                            { userId: user.id },
                            process.env.REFRESH_TOKEN_SECRET
                        ),
                    });
                })
                .catch(error => res.status(500).json({ error: error.message + " ligne 84" }));
        })
        .catch(error => res.status(500).json({ error: error.message + " ligne 86" }));
};

//   GET ONE USER
exports.getOne = (req, res, next) => {
    models.User.findOne({
        where: { id: req.params.id },
        include: { model: models.UserMessages, include: models.Message }
    })
        .then((user) => {
            user.password = undefined;
            !user.showEmail ? user.email = undefined : "";
            res.status(200).json(user);
        })
        .catch(error => res.status(400).json({ error: error.message }))
};

exports.refreshToken = (req, res, next) => {

};

//     EDIT USER
exports.editOne = (req, res, next) => {
    if (req.file) {
        models.User.findByPk(req.params.id)
            //Topic.findById(req.params.id)
            .then(user => {
                const filename = user.avatar.split('/avatars/')[1];
                fs.unlink(`avatars/${filename}`, () => { console.log("Avatar supprimé") });
            });
    }
    let user = { ...req.body };
    if (req.file) {
        avatar = `${req.protocol}://${req.get('host')}/avatars/${req.file.filename}`;
    } else {
        models.User.update(user, { where: { id: user.id } })
            .then(res.status(201).json({ message: 'Utilisateur modifié avec succés !' }))
            .catch((error) => { res.status(400).json({ error: error.message }) })
    }

};

//    DELETE USER
exports.deleteOne = (req, res, next) => {
    models.User.findByPk(req.params.id)
        .then(user => {
            const filename = user.avatar.split('/medias/')[1];
            fs.unlink(`medias/${filename}`, () => {
                models.User.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Topic supprimée !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
}

//   GET ALL USERS
exports.getAllUsers = (req, res, next) => {
    models.User.findAll({ attributes: ['id', 'username', 'service', 'avatar'] })
        .then(userDatas => res.status(200).json(userDatas))
        .catch(error => res.status(400).json({ error: error.message }))
}








//TESTS ############################################################################
//TESTS ############################################################################
//TESTS ############################################################################
//TESTS ############################################################################
//TESTS ############################################################################
//TESTS ############################################################################
//TESTS ############################################################################
//TESTS ############################################################################



exports.test = (req, res, next) => {
    const login = {
        userId: 1,
        accessToken: jwt.sign(
            { userId: 1 },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '-10s' }
        ),
        refreshToken: jwt.sign(
            { userId: 1 },
            process.env.REFRESH_TOKEN_SECRET
        ),
    };
    try {
        let accessToken = login.accessToken;
        let decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.userId;
        if (1 !== userId) {
            throw 'ID de l\'utilisateur incorrect';
        } else {
            res.status(200).json({ message: 'fait' });
        }
    } catch (e) {
        if (e.name === "TokenExpiredError" && jwt.verify(login.refreshToken, process.env.REFRESH_TOKEN_SECRET) && jwt.verify(login.refreshToken, process.env.REFRESH_TOKEN_SECRET).userId === 1) {
            models.User.findByPk(login.userId)
                .then(user => {
                    if (!user || user.level === 0) {
                        res.status(401).json({ error: 'Utilisateur invalide' });
                    } else {
                        //TODO generate new token
                        res.status(401).json({ error: "Token expiré" });
                    }
                })
        } else {
            res.status(401).json({
                error: e.message
            });
        }

    }
}