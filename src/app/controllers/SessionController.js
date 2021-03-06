import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionControler{

    async store(req, res){
        const { email, password } = req.body

        const user = await User.findOne({ where: { email}});

            if(!user){
                return res.status(401).json({ message: 'Usuario nao encontrado!'})
            }
            if( ! (await user.checkPassword(password))){
                return res.status(401).json({ message: 'senha invalida!'})
            }

        const { id, name } = user;

        console.log(authConfig)


        res.json({
            user:{
                id,
                name,
                email,
            },
            token: jwt.sign({ id}, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    }
}





export default new SessionControler();