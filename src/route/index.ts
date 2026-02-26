import userRoutes from "./user-route";

const indexRoute = [
  ...userRoutes.map((route) => ({
    ...route,
    base: "/users",
  })),
];

export default indexRoute;
