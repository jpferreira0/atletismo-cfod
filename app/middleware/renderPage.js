const path = require('path');

const renderPage = (req, res, next) => {
    res.renderPage = (view, options) => {
        res.render(path.join('pages', view), options);
    };
    next();
};

module.exports = renderPage;