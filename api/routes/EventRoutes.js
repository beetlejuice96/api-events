'use strict';
module.exports = function(app) {
    var eventController = require('../controllers/EventController');

    //todoLst Routes

    app.route('/event')
        .post(eventController.insert)
        .get(eventController.list_all_event);

    app.route('/event/:eventId')
        .get(eventController.get)
        .put(eventController.update)
        .delete(eventController.delete);

};