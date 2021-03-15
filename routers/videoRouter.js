import express from "express";
import {
  deleteVideo,
<<<<<<< HEAD
  videoDetail,
  getEditVideo,
  postEditVideo,
=======
  editVideo,
  upload,
  videoDetail,
  videos,
>>>>>>> parent of aca91d8 (3.2까지 완료)
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

<<<<<<< HEAD
// videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);
=======
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
>>>>>>> parent of aca91d8 (3.2까지 완료)

export default videoRouter;
