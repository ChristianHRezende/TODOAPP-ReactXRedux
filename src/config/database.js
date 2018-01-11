//Database configs

const mongoose = require('mongoose')

//Remove mensagem de advertência
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')