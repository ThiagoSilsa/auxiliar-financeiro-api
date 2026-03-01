import  express  from "express";

import userController from "../controller/user-controller";



const router = express.Router();


router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users/", userController.createUser);

export default router;
