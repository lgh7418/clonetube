import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

// 함수를 controller에 모아서 예쁘게 정리하고, export해서 여기다가 import 하는 거임
// globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;