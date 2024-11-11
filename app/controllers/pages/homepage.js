const homepageController = (req, res) => {
    res.renderPage('homepage', {
        layout: 'main',
    });
};

module.exports = homepageController;