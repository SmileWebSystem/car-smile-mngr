import { Request, Response, Router } from 'express';
import { constants } from 'http2';
import FasecoldaService from '../services/FasecoldaService';

const HealthController = Router();

/**
 *
 */
HealthController.get('/health',
    async (req: Request, res: Response) => {
        FasecoldaService.test();
        res.status(constants.HTTP_STATUS_OK).send('OK');
    });

export default HealthController;
