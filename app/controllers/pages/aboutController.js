const aboutController = (req, res) => {
    res.renderPage('aboutus', {
        layout: 'main',
    });
};

module.exports = aboutController;