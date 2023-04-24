const {Schema, model} = require('mongoose');

// Схема описывает, как данные будут храниться
const Role = new Schema({
    value: {type: String, unique: true, default: 'USER'},
});

module.exports = model('Role', Role);