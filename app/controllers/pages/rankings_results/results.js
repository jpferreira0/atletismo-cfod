const resultsController = (req, res) => {
    res.renderPage('ranking_results/results', {
        layout: 'main',
    });
};

module.exports = resultsController;