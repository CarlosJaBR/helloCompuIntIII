import { Express } from "express";
import userController from "../controllers/user.controller";

const routes = (app:Express) => {
    app.get('/users', userController.getUsers);
    app.post('/users', userController.create);
    app.put('/users/:id', userController.update);
};

export default routes; 
