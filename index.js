const config = require('./common/config/env.config');

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

const searchRouter = require('./search/route.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(cookieParser());
searchRouter.routesConfig(app);

app.listen(config.port, function(){
    console.log('App listening at port %s', config.port);
})