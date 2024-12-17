const throwsController = (req, res) => {
    res.renderPage('club/athletics_events/throws', {
        layout: 'main',
    });
};

module.exports = throwsController;