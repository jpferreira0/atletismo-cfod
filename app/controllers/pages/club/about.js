const aboutController = (req, res) => {
    res.renderPage('club/about', {
        layout: 'main',
    });
};

module.exports = aboutController;