const jwt = require('jsonwebtoken');
const {secret} = require('../config');

module.exports = function(req, res, next){
    if(req.method === 'OPTIONS'){
        next();
    }
    try {
        // "Bearer AKsfhfdgkgfg...."
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return res.status(403).json({message: 'Ошибка доступа: пользователь не авторизован'});
        }
        const decodedData = jwt.verify(token, secret); // {id, roles}
        req.user = decodedData; // изменить объект запроса чтобы использовать инфу в других функцуиях
        next();
    } catch(e) {
        console.log(e);
        return res.status(403).json({message: 'Ошибка доступа: пользователь не авторизован'});
    }
}