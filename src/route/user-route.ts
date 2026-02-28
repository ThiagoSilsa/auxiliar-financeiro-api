import userController from "../controller/user-controller";

const userRoutes = [
  {
    path: "/getAll",
    method: "get",
    handler: userController.getUsers,
  },
  {
    path: "/:id",
    method: "get",
    handler: userController.getUserById,
  },
  {
    path: "/create",
    method: "post",
    handler: userController.createUser,
  },
];

export default userRoutes;
