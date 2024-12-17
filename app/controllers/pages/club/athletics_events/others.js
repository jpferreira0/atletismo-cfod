const othersController = (req, res) => {
    res.renderPage('club/athletics_events/others', {
        layout: 'main',
    });
};

module.exports = othersController;