import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddlewar = (req, res, next) => {
  res.locals.siteName = "GitTube";
  res.locals.routes = routes;
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
