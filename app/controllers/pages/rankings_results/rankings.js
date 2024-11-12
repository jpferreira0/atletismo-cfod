const rankingController = (req, res) => {
    res.renderPage('ranking_results/rankings', {
        layout: 'main',
    });
};

module.exports = rankingController;