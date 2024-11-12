const minimumController = (req, res) => {
    res.renderPage('competitions/minimum', {
        layout: 'main',
    });
};

module.exports = minimumController;