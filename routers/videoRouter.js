import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVieo } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVieo);

export default videoRouter;