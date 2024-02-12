import { Request,Response } from "express";
import userService from "../services/user.service";

class UserController {
    public getUsers(req: Request, res: Response){

        const users = userService.findAll();
        res.json(users);
    }
}

export default new UserController(); 

