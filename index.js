const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

//middlewares:
app.use(express.json());
app.use('/auth', authRouter);


const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth_roles');
        console.log('К БД успешно подключены');
        app.listen(PORT, () => console.log('Сервер запущен на ' + PORT + ' порту.'))
    } catch(e) {
        console.log(e);
    }
}

start();