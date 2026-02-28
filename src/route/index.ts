import userRoutes from "./user-route";

const indexRoute = [
  ...userRoutes.map((route) => ({
    ...route,
    base: "/user",
  })),
];

export default indexRoute;
