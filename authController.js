class AuthController {
    static async registration(req, res){
        try{

        }catch(e){
            console.log(e);
        } 
    }
    static async login(req, res){
        try{

        }catch(e){
            console.log(e);
        }
    }
    static async getUsers(req, res){
        try{
            res.json('server work');
        }catch(e){
                console.log(e);
        }
    }
}

module.exports = AuthController;