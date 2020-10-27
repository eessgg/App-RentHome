import {Request, Response} from 'express'
import { getRepository } from "typeorm";
import * as Yup from 'yup'

import HouseView from '../views/houses_view';
import House from "../models/House";

export default {
  async index(req: Request, res: Response) {
    const houseRepository = getRepository(House);

    const houses = await houseRepository.find({
      relations: ['images']
    });

    return res.json(HouseView.renderMany(houses));
  },

  async show(req: Request, res: Response) {
    const {id} = req.params;

    const houseRepository = getRepository(House);

    const house = await houseRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return res.json(HouseView.render(house));
  },

  async create(req: Request, res: Response) {
    const { dono, latitude, longitude, details, phonenumber } = req.body;

    const houseRepository = getRepository(House);

    const reqImages = req.files as Express.Multer.File[];
    const images = reqImages.map((image) => {
      return {
        path: image.filename,
      };
    });

    const data = {
      dono,
      latitude,
      longitude,
      details,
      phonenumber,
      images,
    };

    const schema = Yup.object().shape({
      dono: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      details: Yup.string().required().max(300),
      phonenumber: Yup.number().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false
    })

    const house = houseRepository.create(data);

    await houseRepository.save(house);

    return res.status(201).json(house);
  },
};