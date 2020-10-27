import {Router} from "express";
import multer from "multer";

import uploadConfig from './config/upload';
import HouseController from './controllers/HouseController';

const routes = Router()
const upload = multer(uploadConfig);

routes.get("/houses", HouseController.index);
routes.get("/houses/:id", HouseController.show);
routes.post("/houses", upload.array('images'),HouseController.create);


export default routes;

