import debugLib from 'debug';
import ScoreService from '../services/ScoreService';
import SoapService from './SoapService';
import FormatUtil from '../utilities/FormatUtil';
import CarResponse from '../models/CarResponse';
import CarDataService from './CarDataService';

const debug = debugLib('bdb:CarService');

export default class CarService {

    /**
     * Realiza la consulta del vehiculo a partir de la placa
     * @param placa
     */
    public static async checkCar(placa: string) {
        debug('placa: %j', placa);
        const carResponse: CarResponse = new CarResponse();

        await SoapService.getSoapService(placa).then(async (response) => {
            const { body, statusCode } = response;

            debug('statusCode: ', statusCode);
            if (statusCode === 200) {
                const resultJson = await FormatUtil.xmlToJson(body);
                carResponse.scores = ScoreService.carInformationAnalysis(resultJson);
                carResponse.owners = CarDataService.getOwners(resultJson);
            }

        }).catch((error) => {
            debug('Error %j', error);
        });

        return carResponse;
    }
}
