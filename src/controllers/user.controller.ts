import { Request,Response } from "express";
import userService from "../services/user.service";
import { UserDocument, UserInput } from "../models/user.models";
import { UserInfo } from "os";

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
            if(userExist){
                return res.status(400).json({message:"User already exists"});
            }
            const user:UserDocument = await userService.create(req.body as UserInput);
            return res.status(201).json(user);
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public async findById(req:Request,res:Response){
        try{
            
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public async update(req:Request,res:Response){
        try{
            
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public async delete(req:Request,res:Response){
        try{
            
        }catch(error){
            return res.status(500).json(error);
        }
    }


}

export default new UserController(); 

