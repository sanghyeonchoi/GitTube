import routes from "./routes";

export const localsMiddlewar = (req, res, next) => {
  res.locals.siteName = "GitTube";
  res.locals.routes = routes;
  next();
};
