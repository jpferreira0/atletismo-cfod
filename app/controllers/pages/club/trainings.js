const trainingsController = (req, res) => {
    res.renderPage('club/trainings', {
        layout: 'main',
    });
};

module.exports = trainingsController;