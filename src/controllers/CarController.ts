import { Request, Response, Router } from 'express';
import { constants } from 'http2';
import CarService from '../services/CarService';

const CarController = Router();

CarController.get('/v1/car/:placa',
async (req: Request, res: Response) => {
    const result = await CarService.checkCar(req.params.placa);
    res.status(constants.HTTP_STATUS_OK).send(result);
});

export default CarController;
