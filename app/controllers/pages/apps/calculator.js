const calculatorController = (req, res) => {
    res.renderPage('apps/calculator', {
        layout: 'main',
    });
};

module.exports = calculatorController;