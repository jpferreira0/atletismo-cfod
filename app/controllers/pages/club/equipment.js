const equipmentController = (req, res) => {
    res.renderPage('club/equipment', {
        layout: 'main',
    });
};

module.exports = equipmentController;