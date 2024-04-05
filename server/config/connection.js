const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(config.DB,{ useNewUrlParser: true });

module.exports = mongoose.connection;