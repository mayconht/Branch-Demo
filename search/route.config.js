const searchController = require("./controllers/search.controllers")


exports.routesConfig = function (app) {
    app.get('/findUser', [
            searchController.getUser
    ]); 
    app.get('/findCompany', [
        searchController.getCompany
]); 
};