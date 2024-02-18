import { Express } from "express";
import userController from "../controllers/user.controller";

const routes = (app:Express) => {
    app.get('/users', userController.getUsers);
    app.post('/users', userController.create);
    app.put('/users', userController.update);
    app.delete('/users/:id', userController.delete);
    app.get('/users/:id', userController.findById);
    app.post('/login', userController.login);
};

export default routes; 
