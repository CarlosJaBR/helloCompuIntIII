
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

    public async findByEmail(email:any): Promise<UserDocument | null>{
        try{
            const user = await UserModel.findOne({email});
            return user;
        }catch(error){
            throw error;
        }
    }

    public async create(userInput:UserInput):Promise<UserDocument>{
        try{
            const newUser = await UserModel.create(userInput);
            return newUser;
        }catch(error){
            throw error;
        }
    }
} 

export default new UserService();