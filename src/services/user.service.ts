
import UserModel, {UserInput,UserDocument} from '../models/user.models';

class UserService {

    public async findAll():Promise<UserDocument[]>{

        try{
            const users = await UserModel.find();
            return users;
        }catch(e){
            throw e;
        }
    }
} 

export default new UserService();