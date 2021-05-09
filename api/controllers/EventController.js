'use strict';
//Los controlles hacen de services//repository
var moongose = require("mongoose"),
    EventDatastore = moongose.model("Event");

exports.list_all_event = function (req, res) {
    EventDatastore.find({}, function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.insert = function (req, res) {
    var new_event = new EventDatastore(req.body);
    new_event.save(function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.get = function (res, req) {
    EventDatastore.findById(req.params.eventId, function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
}

exports.update = function (res,req) {
    EventDatastore.findOneAndUpdate(
        {_id:req.params.EventId},
        req.body,
        {new:true},
        function (err,event) {
            if (err)
                res.send(err);
            res.json(event);
        });
};


exports.delete = function (res,req) {
    EventDatastore.remove(
        {_id:req.params.eventId},
        function (err,event) {
            if (err)
                res.send(err);
            res.json(event);
        });
};






