const combinedEventsController = (req, res) => {
    res.renderPage('club/athletics_events/combined_events', {
        layout: 'main',
    });
};

module.exports = combinedEventsController;