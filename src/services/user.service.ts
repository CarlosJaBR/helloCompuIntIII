
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
    public async findById(id:string): Promise<UserDocument | null>{
        try{
            const user = await UserModel.findById(id);
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

    public async update(id:String,userInput:UserInput):Promise<UserDocument | null>{
        try{
            const updatedUser:UserDocument | null = await UserModel.findOneAndUpdate({_id:id},userInput,{returnOriginal:false}); 
            return updatedUser;
        }catch(error){
            throw error;
        }   
    }

    public async delete(id:String):Promise<UserDocument | null>{
        try{
            return await UserModel.findByIdAndDelete({_id:id});
            
        }catch(error){
            throw error;
        }
    }
} 

export default new UserService();