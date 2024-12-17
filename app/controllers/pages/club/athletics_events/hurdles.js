const hurdlesController = (req, res) => {
    res.renderPage('club/athletics_events/hurdles', {
        layout: 'main',
    });
};

module.exports = hurdlesController;