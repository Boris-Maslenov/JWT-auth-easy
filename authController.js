const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const Role = require('./models/Role');
const User = require('./models/User');

class AuthController {
    static async registration(req, res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Ошибка регистрации', errors})
            }
            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if(candidate){
                return res.status(400).json({message: 'User with this name already exists'});
            }
            const hashPassword = bcrypt.hashSync(password, 3);
            const userRole = await Role.findOne({value: "USER"});
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save();
            return res.status(200).json({message: 'Пользователь успешно зарегистрирован'});
        }catch(e){
            console.log(e);
            res.status(400).json({message: 'registration error'})
        } 
    }
    static async login(req, res){
        try{

        }catch(e){
            console.log(e);
            res.status(400).json({message: 'login error'})
        }
    }
    static async getUsers(req, res){
        try{
            // const userRole = Role();
            // const adminRole = Role({value: "ADMIN"});
            // await userRole.save();
            // await adminRole.save();
            res.json('server work');
        }catch(e){
                console.log(e);
        }
    }
}

module.exports = AuthController;