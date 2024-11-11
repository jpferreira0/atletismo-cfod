const practiceController = (req, res) => {
    res.renderPage('practice', {
        layout: 'main',
    });
};

module.exports = practiceController;