const distanceController = (req, res) => {
    res.renderPage('club/athletics_events/distance', {
        layout: 'main',
    });
};

module.exports = distanceController;