const jumpsController = (req, res) => {
    res.renderPage('club/athletics_events/jumps', {
        layout: 'main',
    });
};

module.exports = jumpsController;