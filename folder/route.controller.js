const folderController = require("./controllers/folder.controllers")


exports.routesConfig = function (app) {
    app.get('/getSystem', [
            folderController.getSystem
    ]); 
};