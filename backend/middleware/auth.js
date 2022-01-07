const jwt = require('jsonwebtoken');
const models = require('../models');

module.exports = (req, res, next) => {
    try {
        let accessToken = req.headers.authorization.accessToken.split(' ')[1];
        let decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'ID de l\'utilisateur incorrect';
        } else {
            next();
        }
    } catch (e) {
        if (e.name === "TokenExpiredError"&& jwt.verify(req.headers.authorization.refreshToken, process.env.REFRESH_TOKEN_SECRET) && jwt.verify(req.headers.authorization.refreshToken, process.env.REFRESH_TOKEN_SECRET).userId === 1) {
            models.User.findOne({ id: req.body.userId})
                .then(user => {
                    if (!user) {
                        res.status(401).json({ error: 'Utilisateur non trouvé' });
                    } else if (user.level === 0) {
                        res.status(401).json({ error: 'Utilisateur désactivé' });
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
};