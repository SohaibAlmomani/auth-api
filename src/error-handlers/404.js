'use strict';

module.exports = (req, res) => {
    res.status(404).send({
        code: 404,
        path: req.path,
        message: 'Page Not Found',
    });
};