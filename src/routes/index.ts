import { Express } from "express";
import userController from "../controllers/user.controller";

const routes = (app:Express) => {
    app.get('/users', userController.getUsers);
};

export default routes; 
