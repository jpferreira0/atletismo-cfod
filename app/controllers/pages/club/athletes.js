const athletesController = (req, res) => {
    res.renderPage('club/athletes', {
        layout: 'main',
    });
};

module.exports = athletesController;