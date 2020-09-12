'use strict'

// eslint-disable-next-line no-undef
exports.isAdmin = function (req, res, next) {
    const params = req.body;
    if (params.admin) {
        next();
    } else {
        res.status(403).send('No tienes acceso');
    }
}

