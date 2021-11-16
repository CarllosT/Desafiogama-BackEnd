import User from '../models/User';

class UserController  {

    async store(req,res) {
        const userExists = await User.findOne({ where: { email: req.body.email}});

        if(userExists){
            return res.status(400).json ({ message: 'Usuario ja Existe'})
        }


        const { id, name, email } = await User.create(req.body);
        return res.json({
           message: 'Usuario criado com sucesso!'
        })
        
    }

}

export default new UserController();