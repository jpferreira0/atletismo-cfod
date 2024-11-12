const calendarController = (req, res) => {
    res.renderPage('competitions/calendar', {
        layout: 'main',
    });
};

module.exports = calendarController;