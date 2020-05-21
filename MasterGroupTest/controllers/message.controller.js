var messages = {
    message0: {
        msg: "TestMsg",
        tag: "TestTag",
        id: 0
    }
}

var nextUniqueId = 0;
var AlredyKnownKey = 8796;
var RouteMessage = "/message";

var _ = require("underscore");

var xkey;
var xroute;

exports.create = function (req, res) {

    xkey = req.header('X-Key');
    xroute = req.header('X-Route');

    if (xkey != AlredyKnownKey)
        res.status(403).send();

    if (xroute != RouteMessage)
        res.status(403).send();

    var newmessage = req.body;
    nextUniqueId++;
    newmessage.id = nextUniqueId;
    messages["message" + nextUniqueId] = newmessage;
    res.status(200);
    res.send(nextUniqueId.toString());
};

exports.findAll = function (req, res) {

    console.log("--->Find All: \n" + JSON.stringify(messages, null, 4));
    res.end("All messages: \n" + JSON.stringify(messages, null, 4));
};

exports.findAllId = function (req, res) {
    xkey = req.header('X-Key');
    xroute = req.header('X-Route');

    if (xkey != AlredyKnownKey)
        res.status(403).send();

    if (xroute != RouteMessage)
        res.status(403).send();

    //var message = messages["message" + req.params.id];
    var filtered = _.where(messages, { id: parseInt(req.params.id) });

    res.status(200);
    res.send(filtered);
};

exports.findAllTag = function (req, res) {
    xkey = req.header('X-Key');
    xroute = req.header('X-Route');

    if (xkey != AlredyKnownKey)
        res.status(403).send();

    if (xroute != RouteMessage)
        res.status(403).send();

    var filtered = _.where(messages, { tag: req.params.tag });

    res.status(200);
    res.send(filtered);
};
