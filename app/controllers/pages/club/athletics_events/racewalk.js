const racewalkController = (req, res) => {
    res.renderPage('club/athletics_events/racewalk', {
        layout: 'main',
    });
};

module.exports = racewalkController;