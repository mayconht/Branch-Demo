const searchController = require("./controllers/search.controllers")


exports.routesConfig = function (app) {
    app.get('/findUser', [
            searchController.getById
    ]); 
};