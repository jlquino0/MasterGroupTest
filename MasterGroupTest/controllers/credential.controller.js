var credentials = {
    credential1: {
        shared_secret: "TestSecret",
        key: 1
    }
}

exports.create = function (req, res) {
    
    var updatedcredential = req.body;
    var key = updatedcredential.key;
    if (credentials["credential" + key] != null) {
        res.status(403).send();
    } else {
        credentials["credential" + key] = updatedcredential;
        res.status(204).send();
    }

};

exports.findAll = function (req, res) {
    console.log("--->Find All: \n" + JSON.stringify(credentials, null, 4));
    res.end("All credentials: \n" + JSON.stringify(credentials, null, 4));
};