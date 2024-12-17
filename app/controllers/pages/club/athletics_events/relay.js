const relayController = (req, res) => {
    res.renderPage('club/athletics_events/relay', {
        layout: 'main',
    });
};

module.exports = relayController;