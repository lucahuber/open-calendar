var Calendar = require('./models/calendar');
var path = require('path');

module.exports = function(app) {
    
    // Backend
    app.get('/api/calendars', function(req, res) {
        Calendar.find(function(err, calendars) {
            if(err){
                res.send(err);
            }

            res.json(calendars);
        });
    });

    // Frontend
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views/index.html'));
    });
}