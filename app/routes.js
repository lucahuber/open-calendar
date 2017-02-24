var Calendar = require('./models/calendar');
var path = require('path');

module.exports = function(app) {
    
    // Backend
    app.get('/api/calendars', function(req, res) {
        res.json({data: 'json api test'});
    });

    // Frontend
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views/index.html'));
    });
}