import routes from "./routes";

export const localsMiddlewar = (req, res, next) => {
  res.locals.siteName = "GitTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
