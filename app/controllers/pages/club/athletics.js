const athleticsController = (req, res) => {
    res.renderPage('club/athletics', {
        layout: 'main',
    });
};

module.exports = athleticsController;