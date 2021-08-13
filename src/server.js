'use strict';

const express = require('express');
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const foodRoutes = require('./routes/food');
const clothes =require ('./routes/clothes')
const app = express();
app.use(express.json()); 
app.use(logger);
app.use(foodRoutes);
app.use(clothes);

function start(PORT) {
    app.listen(PORT, ()=> console.log(`listening on ${PORT}`))
}
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}