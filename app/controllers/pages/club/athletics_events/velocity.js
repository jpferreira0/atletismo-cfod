const velocityController = (req, res) => {
    res.renderPage('club/athletics_events/velocity', {
        layout: 'main',
    });
};

module.exports = velocityController;