'use strict';

var express = require('express');
const config = require('./config');
const cors = require('cors');

const profileRouter = require('./src/routes/profileRouter');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:  true}));

app.use('/api', profileRouter.routes);

app.listen(config.port, () => {
    console.log('Server is running on http://localhost:' + config.port);
});