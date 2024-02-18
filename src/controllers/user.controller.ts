import { Request,Response } from "express";
import userService from "../services/user.service";
import { UserDocument, UserInput } from "../models/user.models";
import bcrypt from "bcrypt";

class UserController {
    public getUsers(req: Request, res: Response){
        try{
            const users = userService.findAll();
            res.json(users);
        }catch(error){
            return res.status(500).json(error);
        }   
    }

    public async create(req:Request,res:Response){
        try{
            const userExist:UserDocument | null = await userService.findByEmail(req.body.email);
            req.body.password = await bcrypt.hash(req.body.password,10);
            if(userExist){
                return res.status(400).json({message:"User already exists"});
            }
            const user:UserDocument = await userService.create(req.body as UserInput);
            return res.status(201).json(user);
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public async login(req:Request,res:Response){
        
    }
    public async update(req:Request,res:Response){
        try{

            const userExist:UserDocument | null = await userService.findById(req.body.id);
            if(userExist){
                if(req.body.password){
                    req.body.password = await bcrypt.hash(req.body.password,10);
                }
                const updateUser:UserDocument | null = await userService.update(req.params.id,req.body as UserInput);
                return res.status(200).json(updateUser);
            }
            return res.status(404).json({message:"User not found"});
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public async delete(req:Request,res:Response){
        try{
            const userExist:UserDocument | null = await userService.findById(req.params.id);
            if(!userExist){
                return res.status(404).json({message:"User not found"});
            }
            const user: UserDocument | null = await userService.delete(req.params.id);
            return res.status(200).json({message:"User has been deleted"});
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public async findById(req:Request,res:Response){
        try{
            const user = await userService.findById(req.params.id);
            if(!user){
                return res.status(404).json({message:"User not found"});
            }
            return res.status(200).json(user);
        }catch(error){
            return res.status(500).json(error);
        }
    }


}

export default new UserController(); 

